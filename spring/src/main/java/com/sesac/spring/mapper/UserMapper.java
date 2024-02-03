package com.sesac.spring.mapper;

import com.sesac.spring.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Delete;

import java.util.List;


@Mapper
public interface UserMapper {
    // Mapper 는 interface 로 정의돼야 한다!
    // Mapper 는 SQL 쿼리를 작성하고, 이를 실행하는 자바 메서드를 정의하거나 xml 파일을 읽는다

    // @Mapper: 아래는 xml 파일을 읽어서 실행하겠다
    // properties 에서 아래 두 줄을 추가해서 설정해야 함
    // mybatis.type-aliases-package=com.spring.boot.mapper
    // mybatis.mapper-locations=mybatis-mapper/*.xml
     List<User> retrieveAll();
     
    // SQL 문 정의

    // @Insert: insert 문 기입
    // #{name}, #{nickname} : 전달받은 name 과 nickname 변수값을 넣으라는 의미
     @Insert("insert into user(name, nickname) values(#{name}, #{nickname})")
     void createUser(String name, String nickname);

     @Update("UPDATE user SET nickname = #{nickname} WHERE id = #{id}")
     void updateUser(int id, String nickname);

     @Delete("DELETE FROM user WHERE id = #{id}")
     void deleteUser(int id);
}
