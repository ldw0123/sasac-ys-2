package com.sesac.spring.dto;

import lombok.Getter;
import lombok.Setter;

// DTO: 값을 전달하기 위해 사용
// DTO 는 필드명이 컬럼과 일치하지 않아도 상관 없다
// domain 은 일치해야 한다!

@Getter
@Setter
public class BoardDTO {
    private int boardID;
    private String title, content, writer, registered;
    private int no;

}

