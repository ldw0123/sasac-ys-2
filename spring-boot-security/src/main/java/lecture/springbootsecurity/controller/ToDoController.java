package lecture.springbootsecurity.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todo") // localhost:8080/todo
public class ToDoController {
    @GetMapping("")
    public String getTodo(@AuthenticationPrincipal String userId) {
        // @AuthenticationPrincipal  : SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        // 값을 자동으로 userId에 할당해주는 역할
        return "GET /todo by user id" + userId; // todo list 를 누가 썼는지
    }

}
