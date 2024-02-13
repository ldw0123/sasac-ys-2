package lecture.springbootsecurity.dto;

import lombok.Builder;
import lombok.Getter;

@Getter // DTO 에서 값을 조회할 수 있도록
@Builder
public class UserDTO {
    private long id;
    private String username;
    private String email;
    private String password;
}
