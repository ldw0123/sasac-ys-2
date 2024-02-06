package com.sesac.spring._03_jpa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// @Entity: 데이터베이스의 필드와 변수의 연관관계가 정의된 친구. DB 테이블에 대응되는 하나의 클래스
@Entity // class student() {} 와 같은 빈 생성자가 필수로 필요하다
@NoArgsConstructor
@Getter
@Builder // 필드가 전체 다 들어있는 생성자가 필수로 필요하다
@AllArgsConstructor
//@Table(name="Student") // table name 설정 (대문자)
public class Student {
    // @Entity 와 @Builder 가 충돌이 발생하고 있음 -> 해결법: @NoArgsConstructor & @AllArgsConstructor 이용 -> @Entity 와 @Builder 가 필요로 하는 생성자를 만들어준다
    @Id // pk
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private int id;
    // id int primary key auto_increment
    // SEQUENCE : 새로운 오브젝트를 만들어서 id 를 부여하는 방법 (mysql 에는 존재하지 않음)
    // TABLE : SEQUENCE 전략을 흉내낸 전략 -> 모든 DBMS 에서 사용 가능

    @Column(name="name", nullable = false, length = 20)
    private String name;
    // name varchar(20) not null

    @Column(columnDefinition = "TEXT")
    private String nickname;

    // enum 타입
    @Enumerated(EnumType.STRING)
    private LoginType type;
    public enum LoginType {
        GOOGLE, KAKAO
    }


}
