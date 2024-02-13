package lecture.springbootsecurity.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name="user") // user Table

/*
    user table 정의하기
    
    create table user (
    id bigint primary key not null auto_increment,
    username varchar(20) not null,
    email varchar(100) not null,
    password varchar(255) not null
    );
 */

public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment 설정
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name="username", length = 20, nullable = false)
    private String username;

    @Column(name = "email", length = 100, nullable = false)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

}
