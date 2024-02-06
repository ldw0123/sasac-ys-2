package com.sesac.spring._02_mybatis.service;

import com.sesac.spring._02_mybatis.domain.User;
import com.sesac.spring._02_mybatis.dto.UserDTO;
import com.sesac.spring._02_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

// MVC 에서 Service 역할을 함
// DI (의존성 주입) 중, 필드 주입 & 생성자 주입을 이용
@Service
public class UserService {
    // UserMapper 호출
    // 1. 생성자 사용
    // UserMapper 에서 선언해놓아서, 여기서 사용할 수 있다
//    private final UserMapper userMapper;
//    public UserService(UserMapper userMapper) {
//        this.userMapper = userMapper;
//    }

    // 2. @Autowired
    @Autowired
    UserMapper userMapper;

    // UserDTO 타입을 반환
    public List<UserDTO> retrieveAll() {
        // retrieveAll(): controller 에서 호출하는 메서드
        // userMapper 의 retrieveAll() 을 실행한 후 받아온 Lise<User>
        // List<UserDTO> 에 담아서 반환

        List<User> users = userMapper.retrieveAll();
        List<UserDTO> result = new ArrayList<>();

        // for 문을 이용해 List<User> -> List<UserDTO> 로 변환
        for (User user : users) {
            UserDTO userDTO = new UserDTO();
            userDTO.setName(user.getName());
            userDTO.setNickname(user.getNickname());

            result.add(userDTO);
        }
        return result;

        // 1) userService.retrieveAll() 에서 의존성을 주입받은 userMapper.retrieveAll() 메서드 호출
        // 2) userMapper interface 파일에서 xml 파일 확인 필요 여부 체크 (xml 파일이 있는지, 작성되어 있는지..)
        // 3) 정의된 mapper 폴더(application.properties 에서 정의)에서 namespace 가 UserMapper 인 xml
        // 4) id 가 retrieveAll 인 태그를 찾고, 그 안의 SQL 문을 실행
        // 5) 실행 결과를 resultType 에 정의된 객체에 매핑해서 반환
    }

    public void createUser(String name, String nickname) {
        userMapper.createUser(name, nickname); // userMapper 에 createUser()를 보냄
    }

    public void updateUser(int id, String nickname) {
        userMapper.updateUser(id, nickname);
    }

    public void deleteUser(int id) {
        userMapper.deleteUser(id);
    }
}

