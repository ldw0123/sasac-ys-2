package lecture.springbootsecurity.controller;

import jakarta.servlet.http.HttpSession;
import lecture.springbootsecurity.dto.UserDTO;
import lecture.springbootsecurity.entity.UserEntity;
import lecture.springbootsecurity.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth") // localhost:8080/auth
@Slf4j // 로그를 편리하게 찍을 수 있도록 도와준다. 로그 관련 메서드를 편리하게 사용할 수 있다
public class UserController {
    @Autowired
    UserService userService; // service 호출

    // 비밀번호 암호화
    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @GetMapping("")
    public String getAuth() {
        return "GET /auth";
    }

    // 회원가입
    @PostMapping("/signup") // localhost:8080/auth/signup
    // ? : 와일드카드. body 에 어떤 값이 와도 상관 없다. body 에 무슨 값이 들어올지 몰라서 사용
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            // builder 를 이용해 값 설정
            UserEntity user = UserEntity.builder()
                    .email(userDTO.getEmail())
                    .username(userDTO.getUsername())
                    .password(passwordEncoder.encode(userDTO.getPassword())) // 비밀번호 암호화를 해서 보낸다
                    .build();

            UserEntity responseUser = userService.create(user);

            // DTO 객체 생성하고, builder 를 이용해 값 설정
            UserDTO responseUserDTO = UserDTO.builder()
                    .email(responseUser.getEmail())
                    .username(responseUser.getUsername())
                    .id(responseUser.getId())
                    .build();

            return ResponseEntity.ok().body(responseUserDTO); // ok: 상태 코드 200번
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // badRequest: 상태 코드 400번
            // 서버 에러라면? 500번
        }
    }

    // 로그인
    @PostMapping("/signin")
    public ResponseEntity<?> loginUser(HttpSession session, @RequestBody UserDTO userDTO) {
        try {
            UserEntity user = userService.login(userDTO.getEmail(), userDTO.getPassword());
            // 유저 조회가 안 되면 null
            if (user == null) {
                throw new RuntimeException("로그인에 실패하였습니다");
            }

            UserDTO responseUserDTO = UserDTO.builder()
                    .email(user.getEmail())
                    .username(user.getUsername())
                    .id(user.getId())
                    .build();

//            log.info(); // 정보를 찍음
//            log.error(); // error 를 찍음
            log.warn("session id {}", session.getId()); // 경고를 찍음
            session.setAttribute("userId", user.getId());
            return ResponseEntity.ok().body(responseUserDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // 에러 메시지를 body 에 담아서 보냄
        }
    }
}
