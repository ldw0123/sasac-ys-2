package com.sesac.spring._02_mybatis.domain;

// 실습 BoardController.java

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Board {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;

}
