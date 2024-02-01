// 2024.02.01. Spring 2 - Get, Post 수업

package com.sesac.spring.controller;

import com.sesac.spring.dto.UserDTO;
import com.sesac.spring.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
// @RestController // @Controller + @ResponseBody 를 합친 역할
public class MainController {
    @GetMapping("/")
    public String GetMain() {
        return "request"; // request!!
    }

    // 💡 GET
    // 매개변수를 넘겨받는 방법
    // 1. /test?id=123 -> @RequestParam
    //    ?key=value -> key 와 value 로써, ? 뒤에 쿼리로 넘긴다
    // 2. /test/123 -> @PathVariable

    // ?key=value
    // ?name=
    @GetMapping("/get/response1")
    public String getResponse1(
            // ⭐ @RequestParam 어노테이션: 쿼리 파라미터를 Controller 의 메서드 파라미터로 쉽게 받아올 수 있도록 해 준다
            // - ?name=112&id=11&age=abc (O)
            // - ?id=11&hashtag=abc (X) -> name 이 필수로 있어야 한다!
            // - string query ( ? 뒤의 값 ) 에서 key ("name") 에 대한 value ("112) 를 변수 ("i") 에 매핑
            // - required=true 기본값 -> 요청 url 에서 설정한 key 가 필수로 있어야 한다

            // @RequestParam(value = "") : value 값을 넘겨줌으로써, name 을 변수처럼 사용할 수 있다 (String name -> String i)
            @RequestParam(value = "name") String i,
            Model model) {
        model.addAttribute("name", i);
        return "response";
    }

    @GetMapping("/get/response2")
    // require=false 옵션 ( @RequestParam(value="", required=false) )
    // - query string 에서 특정 key 를 옵셔널하게 받아야 하는 경우
    // ex) 검색할 때 ( 검색어(필수) 해시태그(선택) )
    // @RequestParam(value="search") String search,
    // @RequestParam(value="hashtag", required=false) String hashtag

    // ?search=검색어
    // ?search=검색어&hashtag=코딩
    public String getResponse2(
            // getResponse1 와 getResponse2 는 required = false 의 차이만 있다
            // http://localhost:8080/get/response2?name=1 처럼 name 값을 넣어주면 정상적으로 작동한다
            @RequestParam(value = "name", required = false) String name,
            Model model
    ) {
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/get/response3/{param1}/{param2}")
    // url 안에 넣을 때 @PathVariable 을 사용한다
    // 실제로 변수에 어느 위치에 들어가는지 적어주어야 한다
    public String getResponse3(
            /*
            ⭐ @PathVariable 어노테이션: URL 경로에서 특정 값을 추출하여 컨트롤러 메서드의 파라미터로 매핑할 때 사용
            - /test/{id} 형식의 URL 경로로 데이터를 넘겨줄 때 받는 방법
            - 기본적으로 경로 변수의 값을 필수로 받아야 하기 때문 (보내지 않으면 404 error -> 다른 경로로 보냈다고 판단하기 때문)

            참고. url 에 기입한 변수명과 다른 매개변수의 이름을 사용하고 싶다면?
            - @PathVariable int age
            - @PathVariable(value="age") int a
             */
            // http://localhost:8080/get/response3/pikachu/32 처럼 /{param1}/{param2} 에 값을 넣어 주면 정상 작동
            @PathVariable String param1,
            @PathVariable(value = "param2") String age, // 변수를 주어서 이름을 바꿔 사용 가능하다
            Model model) {
        model.addAttribute("name", param1);
        model.addAttribute("age", age);
        return "response";
    }

    // PathVariable 을 보낼 때 선택적으로 처리해야 한다면?
    // param 을 하나 또는 둘을 주고 싶을 때
    // http://localhost:8080/get/response4/이름
    // http://localhost:8080/get/response4/이름/나이
    @GetMapping({"/get/response4/{param1}", "/get/response4/{param1}/{param2}"})
    public String getResponse4(
            @PathVariable String param1,
            @PathVariable(required = false, value = "param2") String age,
            Model model) {
        /*
            1. GetMapping 에 optional 한 경우의 url 을 모두 기입
            2. required=false 설정
               이때, 옵셔널한 parameter 는 맨 뒤에 오도록 설정 필요
         */
        model.addAttribute("name", param1);
        model.addAttribute("age", age);
        return "response";
    }

    ///////////////////////////////////////////////////////////

    // 💡POST

    // POST 로 전달할 때 controller 에서 받는 방법은 @RequestParam
    @PostMapping("/post/response1")
    public String postResponse1(
            @RequestParam(value = "name") String a,
            @RequestParam(value = "age") String b,
            Model model
    ) {
        model.addAttribute("name", a);
        model.addAttribute("age", b); // age 를 안 보냈으니 이 부분에서 에러!
        return "response";
    }

    @PostMapping("/post/response2")
    public String postResponse2(
            @RequestParam(value = "name", required = false) String a,
            @RequestParam(value = "age", required = false) String b,
            Model model
    ) {
        model.addAttribute("name", a);
        model.addAttribute("age", b);
        // 실제로 필수값이 아니기 때문에 정상적으로 실행된다
        return "response";
    }

    /* ⭐ @ResponseBody
    - node.js 의 res.send 와 유사
    - 응답 결과를 template 호출이 아닌 데이터 자체로 응답하고 싶을 때 사용
    - 컨트롤러 메서드가 리턴하는 값을 HTTP 응답 본문에 쓰도록 한다
    - 응답 시 객체를 json 형태로 리턴한다 (Serialization 직렬화)
    */
    @PostMapping("/post/response3")
    @ResponseBody
    public String postResponse3(
            @RequestParam(value = "name", required = false) String a,
            @RequestParam(value = "age", required = false) String b,
            Model model
    ) {
        model.addAttribute("name", a);
        model.addAttribute("age", b);
        // 실제로 필수값이 아니기 때문에 정상적으로 실행된다
        return a + " - " + b; // 템플릿을 불러오는 것이 아닌, return 데이터 값을 직접 보낸다!
    }

    ///////////////////////////////////////////////////////////

    /*
    ?key=value
    일반 폼 전송은 ( get, post 상관없이 url )
    @RequestParam

    객체로 받는 방법
    1. @ModelAttribute
    - url 로 들어온 값을 처리하는 친구 -> 객체에 setter 함수를 실행해주는 친구
    - ex) ?name=홍길동
    - 1) 넘어온 key 를 @ModelAttribute 뒤의 객체에서 필드가 존재하는지 확인
         -> UserDTO 에 private String name;
    - 2) 필드가 존재한다면 그 필드에 해당하는 set 함수를 실행 ( setName, setAge 함수 )
         -> UserDTO.setName("홍길동")

    2. @RequestBody
    - 클라이언트의 요청 중 본문(body)에 들어있는 데이터를 처리
    - setter 함수 실행 x 필드 자체에 값을 넣어줘요
    - @RequestBody 는 각각의 필드(변수)에 직접적으로 값을 주입 ( 필드에 내장된 set 함수를 실행 )
    -> 일반폼전송 -> url 에 데이터 표시 o body x
    */

    // 일반 폼 전송 - DTO 이용
    // - GET -> O
    // - POST + ModelAttribute -> O
    // - POST + RequestBody -> X

    // 💡 DTO(Data Transfer Object): Getter, Setter 메서드만을 가진 클래스

    // 1. GET 요청
    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoResponse1(@ModelAttribute UserDTO userDTO) {
        // GET 방식에서 DTO 객체로 담아서 값이 받아지는 것을 알 수 있다
        /*
           @RequestParam 으로 하나씩 값을 가져오는 것이 아닌 객체로 묶어서 가져오는 방법
           ⭐ @ModelAttribute :
           - 기본적으로 실행되는 어노테이션 (UserDTO userDTO 와 @ModelAttribute UserDTO userDTO 는 동일하게 동작)
           - HTML 폼 데이터를 컨트롤러로 전달할 때 객체에 setter 함수를 매핑하는 어노테이션 (생략 가능)
           매핑 -> setter 함수를 실행
           ?name=홍길동&age=10 -> setName("홍길동") setAge("10")
        */
        return userDTO.getName() + " " + userDTO.getAge();
    }

        /*
         ⭐ @RequestBody : 요청의 본문에 있는 데이터(body)를 받아 필드에 값을 직접 주입하는 어노테이션
          - 요청의 본문에 있는 데이터(req.body)를 읽어와서 객체에 매핑
          - 여기서 매핑이란? 필드 값에 값을 주입하는 것

          - 일반 폼 전송 -> www-x-form-urlencoded => 쿼리 매개변수
          - 일반 폼 전송은 @RequestBody 로는 값을 받을 수 없다
          - @RequestBody 는 요청의 본문에 있는 데이터(body)를 처리할 수 있기 때문에, 전달 받은 요청의 형식이 json 또는 xml 일 때만 실행이 가능
        */
    @GetMapping("/dto/response11")
    @ResponseBody
    public String dtoResponse11(@RequestBody UserDTO userDTO) {
        // Get 방식으로 전달하고 @RequestBody 로 실행 시 오류 발생
        return userDTO.getName() + " " + userDTO.getAge();
    } // x

    @GetMapping("/dto/response111")
    @ResponseBody
    public String dtoResponse111(@ModelAttribute UserDTO userDTO) {
        return userDTO.getName() + " " + userDTO.getAge();
    } // o

    // 2. POST 요청
    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoRes2(UserDTO userDTO) {
        // @ModelAttribute 어노테이션이 없을 때에는 자동 추가됨
        // 즉, 파라미터의 UserDTO 타입 앞에 아무 것도 없다면 @ModelAttribute 어노테이션이 추가됨
        return userDTO.getName() + " " + userDTO.getAge();
    } // o

    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoRes22(@RequestBody UserDTO userDTO) {
        // POST /dto/response3 요청의 경우 "일반 폼 전송" 이다 (www-x-form-urlencoded). 따라서 @RequestBody 사용 시 오류가 발생함
        return userDTO.getName() + " " + userDTO.getAge();
    } // x

    /*
      일반 폼 전송 - DTO (getter, setter 모두 있는 친구)
      1) 어노테이션 없이 DTO 로 받을 경우 -> O
      2) @ModelAttribute DTO 로 받을 경우 -> O
      3) @RequestBody DTO 로 받을 경우 -> 에러

      일반 폼 전송은 www-x-form-urlencoded 형식이기 때문에 get 이든 post 든 요청의 본문에 데이터가 들어가는 게 아닌 폼 데이터 형태로 url 로 데이터가 전송된다
      즉, 일반 폼 전송은 @RequestBody 사용 불가!
     */

    ///////////////////////////////////////////////////////////

    // 일반 폼 전송 -  VO 이용
    // - GET -> NULL
    // - POST + ModelAttribute -> Null
    // - POST + RequestBody -> X

    /*
      💡VO(Value Object): 값 객체
      DTO와 비슷하지만, VO는 read-Only 속성을 갖고 있는 객체
      Getter 만 가지고 있어 값에 대한 수정이 불가능하다
    */

    // 1. GET 요청
    // get 방식, @ModelAttribute -> null null (setter 가 없기 때문)
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voResponse1(UserVO userVO) {
        // @ModelAttribute 를 이용하면 객체의 set 함수를 이용해 값을 넣어줌
        return userVO.getName() + " " + userVO.getAge();
    } // o(null)

    // post 방식, @ModelAttribute -> null null
    @PostMapping("/vo/response2")
    @ResponseBody
    public String voResponse2(UserVO userVO) {
        return userVO.getName() + " " + userVO.getAge();
    } // o(null)

    // post 방식, @ModelAttribute, @RequestBody -> 오류
    @PostMapping("/vo/response3")
    @ResponseBody
    public String voResponse3(@RequestBody UserVO userVO) {
        return userVO.getName() + " " + userVO.getAge();
    } // x

    ///////////////////////////////////////////////////////////

    // DTO 이용 with axios
    // axios 를 이용한 데이터 처리
    // - GET RequestParam -> o
    // - GET ModelAttribute -> o
    // - GET RequestBody -> x
    // - POST RequestParam -> x
    // - POST ModelAttribute -> null

    // 1. Axios, get, @RequestParam -> O
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosResponse1(@RequestBody String name, @RequestParam String age) {
        return name + " " + age;
    }

    // 2. Axios, get, @ModelAttribute -> O
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosResponse2(UserDTO userDTO) {
        // @ModelAttribute
        // axios = application/json
        return userDTO.getName() + " " + userDTO.getAge();
    }

    @PostMapping("/axios/response3")
    @ResponseBody
    /*
      @RequestParam 의 required 기본값이 true (required=ture)
      Axios 로 값을 전달하게 될 경우 파라미터로 값이 들어오지 않는다 (POST 로 보냈을 때)
      axios post 는 url 에 데이터가 들어가지 않는다
      url 에 아무것도 없는데(값이 들어오지 않는데), @RequestParam 의 required 가 기본값이 true 이기 때문에 오류
      따라서, required=false 를 명기해주면 정상 작동
    */
    public String axiosRes3(@RequestParam String name, @RequestParam String age){
        return "이름: " + name + ", 나이: "+ age;
    } // X

    // axios + post 데이터로 보내면 -> @RequestBody (실행은 되나, null)
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosRes4(UserDTO userDTO){
        // Axios 로 POST 를 보낼 경우 본문에 데이터가 들어가기에 @ModelAttribute 가 확인 불가 -> null
        return "이름:" + userDTO.getName() + ", 나이: "+ userDTO.getAge();
    } // O(null)
    /*
      @ModelAttribute 를 이용해 데이터를 보냈을 때 값이 null
      Axios 로 보내면 url 로 데이터를 보내는 것이 아니라 본문으로 데이터를 보내게 된다
      즉, @ModelAttribute 가 값을 볼 수 없는 것이다
    */

    // axios + post 데이터로 보내면 -> @RequestBody (정상 작동)
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosRes5(@RequestBody UserDTO userDTO){
        return "이름:" + userDTO.getName() + ", 나이: "+ userDTO.getAge();
    } // O

    ///////////////////////////////////////////////////////////

    // VO 이용 with Axios
    // - GET RequestParam : O
    // - GET ModelAttribute : null
    // - GET RequestBody : X
    // - POST RequestParam : X
    // - POST ModelAttribute : null
    // - POST RequestBody : O

    // 1. get + @RequestParam -> O
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosVoRes1(@RequestParam String name, @RequestParam String age) {
        return "이름: " + name + ", 나이: " + age;
    } // o

    // 2. get + @ModelAttribute VO -> O (null)
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVoRes2(UserVO userVO) {
        return "이름: "+ userVO.getName() + ", 나이: "+ userVO.getAge();
    } // o(null)

    // 3. post + @RequestParam(require=ture) -> X
    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosVoRes3(@RequestParam String name, @RequestParam String age) {
        return "이름: " + name + ", 나이: " + age;
    } // x

    // 4. post + @ModelAttribute VO -> O (null)
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVoRes4(UserVO userVO){
        return "이름: "+ userVO.getName() + ", 나이: "+ userVO.getAge();
    }

    // 5. post + @RequestBody VO -> O
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVoRes5(@RequestBody UserVO userVO){
        // axios post 로 데이터를 보내면 요청의 본문(body)에 데이터가 들어간다
        // @RequestBody 는 요청의 본문에 있는 데이터를 읽을 수 있다
        // UserVO 클래스는 setter 메서드가 없다
        // @RequestBody 는 데이터를 각각의 필드(변수)에 직접 값을 주입한다
        // 즉, @RequestBody 는 UserVO 나 UserDTO 상관없이 setter 메서드의 유무와 관계없이 변수에 값을 넣을 수 있다
        return "이름: "+ userVO.getName() + ", 나이: "+ userVO.getAge();
    }
    // @RequestBody로 값을 전달할때 userVO에 setter 함수가 없어도 값이 들어간다.
    // @RequestBody는 setter 함수 실행이 아니라 각각의 필드(변수)에 직접적으로 값을 주입하면서 매핑
    // @ModelAttribute가 setter 함수를 실행해 값을 넣어준다면
    // @RequestBody는 각각의 필드(변수)에 직접적으로 값을 주입한다. 필드에 내장된 set 함수를 실행
    // 즉, @RequestBody는 UserVO UsrDTO 상관없이 setter 메소드의 유무와 관계없이 변수에 값을 넣을 수 있다.

    /*
    1. 일반 폼 전송
    - RequestParam : GET, POST 메서드 둘 다 가능
    - PathVariable : GET만 가능

    2. DTO 이용 - 일반 폼 전송(url 에 들어감)
    - GET 가능하다
    - POST + ModelAttribute : O (ModelAttribute는 url에 들어가기 때문)
    - POST + RequestBody : X

    3. VO 이용 - 일반 폼 전송
    - GET -> null
    - POST + ModelAttribute : null
    - POST + RequestBody : X

    4. AXIOS - DTO
    - GET RequestParam : O
    - GET ModelAttribute : O
    - GET RequestBody : X
    - POST RequestParam : X
    - POST ModelAttribute : null
    - POST RequestBody : O

    5. AXIOS VO
    - GET RequestParam : O
    - GET ModelAttribute : NULL
    - GET RequestBody : X
    - POST RequestParam : X
    - POST ModelAttribute : null
    - POST RequestBody : O
    */
}