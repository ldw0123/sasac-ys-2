package com.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

// @Controller : 해당 클래스가 controller 역할을 한다는 것을 Spring 에게 알려준다
// 자동으로 import 된다
@Controller
public class HelloController {
    // @GetMapping : URL 을 매핑시켜준다
    // 클라이언트가 /hi 라는 경로로 GET method (GET 방식)로 접근하면 아래 메서드를 실행시켜라
    @GetMapping("/hi")
    public String getHi(Model model) {
        // Model : Controller 안의 메서드가 파라미터로 받을 수 있는 객체 중 하나
        // Model 안에 정보를 담아서 view 로 전달한다
        // IoC (제어 역전) : 개발자가 직접 model 을 생성하지 않는다. 받아와서 사용한다

        // res.render("hi")
        // Model에 값을 담기만 하면 그대로 알아서 전달이 된다
        //res.render("hi", {name:'홍길동'}) -> X
        model.addAttribute("name", "홍길동");
        model.addAttribute("key", "값");
        model.addAttribute("name2", "<strong>코딩온</strong>");

        String[] x = {"a", "b", "c", "d", "e"};
        model.addAttribute("item1", x);

        char[] alphabetArray = new char[5];
        char alphabet = 'A';
        for (int i = 0; i < 5; i++) {
            alphabetArray[i] = alphabet;
            alphabet++;
        }
        model.addAttribute("item2", alphabetArray);
        
        return "hi"; // 템플릿 파일의 이름
        // 그냥 실행하면 hi 라는 템플릿 파일의 이름을 생성하지 않았기 때문에 에러 발생! -> templates 폴더 안에 hi.html 을 생성해야 한다
    }

}
