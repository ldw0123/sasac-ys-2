package lecture.springbootsecurity.repository;

import lecture.springbootsecurity.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

// JPA 관련 클래스 상속
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    // email 로 객체(계정 정보)를 하나 찾기
    UserEntity findByEmail(String email);

    // email 로 존재 여부 검사 메서드 - Boolean 값 반환
    Boolean existsByEmail(String email);

    // 이메일과 비밀번호 찾기
    UserEntity findByEmailAndPassword(String email, String password);

}
