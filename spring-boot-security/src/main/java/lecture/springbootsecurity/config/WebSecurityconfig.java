package lecture.springbootsecurity.config;

import lecture.springbootsecurity.security.CustomAuthFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

// 3.X 버전
@Configuration // 스프링 설정 클래스라는 뜻
@EnableWebSecurity // Spring Security 를 사용한다는 뜻
public class WebSecurityconfig {
    @Autowired
    CustomAuthFilter customAuthFilter; // customAuthFilter 의존성 주입
    
    @Bean
    // 암호화
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    
    // Spring Security 설정
    @Bean // 스프링 컨테이너에서 관리
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // 스프링 시큐리티를 적용하면 기본적으로 모든 경로에 인증이 있어야 접근이 가능해진다
        // 특정 경로에서 인증 없이 접근할 수 있도록 설정 (인가 설정)
        http
                .cors(Customizer.withDefaults()) // CORS 이슈 해결
                .csrf(CsrfConfigurer::disable) // post, put 요청을 허용
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers("/auth/**").permitAll() // 인가 없이 접속할 주소 (** : 모든 주소) 는 권한 없이 접속 가능
//                .requestMatchers("/admin/**").hasRole("ADMIN") // 예시
                                .anyRequest().authenticated() // anyRequest() : 나머지 모든 주소 (제일 마지막에 위치해야 함) 는 로그인이 필요
                );
        // .permitAll() : 권한 없이 접속 가능하다
        // .authenticated() : 로그인이 필요하다
        // .hasRole("권한? ex. ADMIN") : 특정 권한이 있어야 접속 가능하다
        
        // 만들어둔 custom 필터 등록
        http.addFilterAfter(customAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build(); // build 의 반환값이 SecurityFilterChain 이 된다
    }

    // CORS 이슈 해결
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        // cors 설정
        config.setAllowCredentials(true); // 실제 응답을 보낼 때, 브라우저에게 자격 증명과 함께 요청을 보낼 수 있도록 허용합니다.
        config.setAllowedOriginPatterns(Arrays.asList("*")); // 모든 원본에서의 요청을 허용합니다.
        config.setAllowedMethods(Arrays.asList("HEAD","POST","GET","DELETE","PUT", "PATCH")); // 허용할 HTTP 메서드를 설정합니다.
        config.setAllowedHeaders(Arrays.asList("*")); // 모든 헤더의 요청을 허용합니다.


        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config); // 모든 경로에 대해 위에서 설정한 CORS 설정을 적용합니다.

        return source;
    };
}


// 주의) 2.X 버전에서 사용하는 문법. 인터넷에서 많이 보이는데, 3.X 버전에서 이걸 그대로 가져와 사용하면 안 된다
/*
    public class WebSecurityconfig extends SecurityConfigurerAdapter {
    public configure() {}
    }
*/