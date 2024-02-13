package lecture.springbootsecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.web.SecurityFilterChain;

// 3.X 버전
@Configuration // 스프링 설정 클래스라는 뜻
@EnableWebSecurity // Spring Security 를 사용한다는 뜻
public class WebSecurityconfig {
    @Bean // 스프링 컨테이너에서 관리
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // 스프링 시큐리티를 적용하면 기본적으로 모든 경로에 인증이 있어야 접근이 가능해진다
        // 특정 경로에서 인증 없이 접근할 수 있도록 설정 (인가 설정)
        http
                .csrf(CsrfConfigurer::disable) // post, put 요청을 허용
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers("/auth/**").permitAll() // 인가 없이 접속할 주소 (** : 모든 주소) 는 권한 없이 접속 가능
//                .requestMatchers("/admin/**").hasRole("ADMIN") // 예시
                                .anyRequest().authenticated() // anyRequest() : 나머지 모든 주소 (제일 마지막에 위치해야 함) 는 로그인이 필요
                );
        return http.build(); // build 의 반환값이 SecurityFilterChain 이 된다

        // .permitAll() : 권한 없이 접속 가능하다
        // .authenticated() : 로그인이 필요하다
        // .hasRole("권한? ex. ADMIN") : 특정 권한이 있어야 접속 가능하다
    }
}

// 주의) 2.X 버전에서 사용하는 문법. 인터넷에서 많이 보이는데, 3.X 버전에서 이걸 그대로 가져와 사용하면 안 된다
/*
    public class WebSecurityconfig extends SecurityConfigurerAdapter {
    public configure() {}
}
*/