package lecture.springbootsecurity.security;
// 1. 세션 기반 인증 방식
// -- 로그인에 성공 -> session 에 userId 저장
// -- 로그인 여부를 판단하고 싶을 때 -> session 에 userId 가 있는지 없는지에 따라서
// ---- 존재하면 로그인을 한 사람, 존재하지 않으면 로그인을 하지 않은 사람
// -- 로그아웃 시에 세션 로그인 정보 삭제

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

// security filter 로 이용되도록 처리하기
// OncePerRequestFilter 는 추상 메서드이므로, 구현해야 함
// 왼쪽 아래 빨간색 경고등 버튼 누르고 > 빨간색 느낌표 버튼 우클릭 > 빠른 수정 표시 > 메서드 구현 > 자동으로 메서드 구현 됨
@Component
@Slf4j
public class CustomAuthFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            HttpSession session = request.getSession();
            log.warn("session id {}", session.getId());
            Object userId = session.getAttribute("userId");

            // session 에 userId 가 있는지 없는지 확인
            if (userId != null) {
                // 1. 사용자 정보를 담는 공간(토큰) 생성
                Authentication authentication = new UsernamePasswordAuthenticationToken(String.valueOf(userId), null, AuthorityUtils.NO_AUTHORITIES);

                // 2. SecurityContextHolder 에 authentication 정보를 담는다 (set)
                // SecurityContextHolder : 클라이언트의 요청 -> 응답 사이에 일시적으로 auth 정보를 저장할 수 있는 공간
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }

        } catch (Exception e) {
            log.error("filter error{}", e.getMessage());
        }

        filterChain.doFilter(request, response);
    }
}

