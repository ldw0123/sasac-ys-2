package com.sesac.spring._01_api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.ArrayList;

// 실습 2
// MVC Controller
@Controller
public class Ex2_PersonController {
    @GetMapping("/Ex2")
    public String getPrac2(Model model) {
        // Ex2_Person.js 의 Ex2_Person 클래스를 사용하도록 Ex2_Person 이름의 객체를 생성해야 한다
        ArrayList<Ex2_Person> people = new ArrayList<>();
        people.add(new Ex2_Person("피츄", 12));
        people.add(new Ex2_Person("꼬부기", 6));
        people.add(new Ex2_Person("치코리타", 10));
        people.add(new Ex2_Person("또가스", 8));

        model.addAttribute("people", people);

        Ex2_Person p = new Ex2_Person("Kim", 10);
//        System.out.println(p.getName());

        return "Ex2";
    }
}
