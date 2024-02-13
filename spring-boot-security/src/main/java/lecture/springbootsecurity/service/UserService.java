package lecture.springbootsecurity.service;

import lecture.springbootsecurity.entity.UserEntity;
import lecture.springbootsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// 유저 생성, 로그인 로직
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository; // repository 로 유저 조회

    public UserEntity create(UserEntity userEntity) { // 회원가입 할 때 사용되는 메서드
        if (userEntity == null) {
            throw new RuntimeException("entity null"); // 예외처리
        }

        // 중복 이메일 불가
        String email = userEntity.getEmail();

        if (userRepository.existsByEmail(email)) {// true 이면 존재
            throw new RuntimeException("이미 존재하는 이메일 입니다");
        }

        return userRepository.save(userEntity); // save. 만든 객체를 반환

    }

    // 로그인하는 서비스
    public UserEntity login(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

}