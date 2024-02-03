package com.sesac.spring.api.controller;

import lombok.Getter;
import lombok.Setter;

// 실습 2
// Person 데이터
@Getter
@Setter
public class Ex2_Person {
    // 필드를 private 로 설정하면서 다른 파일에서 갖고 오려면 getter & setter 설정하기!
    // lombok : 필드 혹은 클래스 위에 @Getter / @Setter 를 적어주면 알아서 Getter & Setter 생성해 준다
    // lombok 플러그인 설치하기!
    private String name; // 이름
    private int age; // 나이

    // 생성자
    public Ex2_Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

}