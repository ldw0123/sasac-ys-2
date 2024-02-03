// MyBatis 수업 controller

package com.sesac.spring.controller;

import com.sesac.spring.dto.UserDTO;
import com.sesac.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // @RestController: Controller 어노테이션 + response.body
@RequestMapping("/user") // URL 정의
public class UserController {
    // C, R
    // 1. Table 생성 완료 (user)
    // 2. domain 만들기 (domain/User)
    // 3. mapper 만들기 (mapper/UserMapper)
    // 4. service 만들기
    // 5. controller 만들기

    @Autowired // @Autowired: 의존성 주입
    UserService userService;

    // @GetMapping: HTTP GET 요청을 처리하는 메서드를 표시하는 데 사용
    @GetMapping("/all") // /user/all
    public List<UserDTO> getUser() {
        List<UserDTO> result = userService.retrieveAll();
        return result;
    } // 실행하고, localhost:8080/user/all 주소로 들어가면 [] 빈 배열 출력

    // CREATE
    @GetMapping("/user") // /user/user
    // @RequestParam: ? 뒤에 오는 것들을 받음
    // localhost:8080/user/user?name=홍길동&nickname=홍길동2 으로 접속
    // localhost:8080/user/all 으로 접속
    public String getUserInsert(
            @RequestParam String name,
            @RequestParam String nickname) {
        userService.createUser(name, nickname);

        return "CREATE success";
    }

    // UPDATE ( ?id=&nickname )
    // localhost:8080/user/update?id=1&nickname=성춘향
    @GetMapping("/update") // /user/update
    public String getUserUpdate(
            @RequestParam int id,
            @RequestParam String nickname
    ) {
        userService.updateUser(id, nickname);

        return "UPDATE success";
    }

    // DELETE ( ?id )
    // localhost:8080/delete/update?id=1
    @GetMapping("/delete") // /user/delete
    public String deleteUser(@RequestParam int id) {
        userService.deleteUser(id);
        return "DELETE success";
    }
}
