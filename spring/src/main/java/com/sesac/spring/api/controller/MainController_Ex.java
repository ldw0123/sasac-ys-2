// 실습 API - GET
// 23.02.01.

package com.sesac.spring.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController_Ex {

    @GetMapping("/introduce/{name}")
    public String getIntroduce1(
            @PathVariable("name") String name, Model model) {
        model.addAttribute("name", name);
        return "Ex3_0201";
    }

    @GetMapping("/introduce2")
    // localhost:8080/introduce2?name=홍길동&age=10
    public String getIntroduce2(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "age", required = false) String age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "Ex3_0201";
    }

    @PostMapping("/pracice/post")
    public String postResponse2(
            @RequestParam(value = "name", required = false) String a,
            @RequestParam(value = "gender", required = false) String b,
            Model model
    ) {
        model.addAttribute("name", a);
        model.addAttribute("age", b);
        // 실제로 필수값이 아니기 때문에 정상적으로 실행된다
        return "Ex4_0201";
    }

}
