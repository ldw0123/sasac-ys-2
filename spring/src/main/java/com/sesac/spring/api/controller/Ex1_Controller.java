package com.sesac.spring.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

// 실습 1
@Controller
public class Ex1_Controller {

    @GetMapping("/prac1")
    public String getPrac1(Model model) {
        model.addAttribute("age", 12);
        model.addAttribute("age2", 23);

        return "Ex1"; // 템플릿 파일 이름
    }
}
