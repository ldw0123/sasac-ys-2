package com.sesac.spring._03_jpa.dto;

// [예제] @Builder 어노테이션을 사용하지 않고 Builder 를 구현
public class StudentDTOBuilder {
    private final String name;
    private final String nickname;
    public static class Builder {
        private String name;
        private String nickname;
        public Builder name(String name) {
            this.name = name;
            return this;
        }
        public Builder nickname(String nickname){
            this.nickname = nickname;
            return this;
        }
        public StudentDTOBuilder build() { return new StudentDTOBuilder(name, nickname); }
    }
    public StudentDTOBuilder(String name, String nickname) {
        this.name = name;
        this.nickname = nickname;
    }

    // Builder 클래스를 반환
    public static Builder builder(){ return new Builder(); }
}