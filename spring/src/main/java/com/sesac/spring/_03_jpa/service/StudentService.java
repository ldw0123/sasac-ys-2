package com.sesac.spring._03_jpa.service;

import com.sesac.spring._03_jpa.dto.StudentDTO;
import com.sesac.spring._03_jpa.entity.Student;
import com.sesac.spring._03_jpa.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public List<StudentDTO> getStudentAll() {
        // findAll(): 전체 검색. 반환타입은 List<Student>
        List<Student> result = studentRepository.findAll();
        List<StudentDTO> students = new ArrayList<>();

        for (Student student : result) {
            // Builder: 생성자 주입 방법을 대체하기 위해 나옴. 객체를 만들 때 순서에 의해 생기는 문제와 명시적이지 못한 문제를 해결하기 위해 나온 방법
            // 객체를 주입하는 방법
            // 1) 생성자: 여러개의 필드가 있을 때 순서를 지켜주어야 한다
            // 2) setter: 필드 개수만큼 매번 메서드를 만들어주어야 한다
            StudentDTO studentDTO = StudentDTO.builder()
                    .name(student.getNickname())
                    .nickname(student.getName())
                    .build();
            students.add(studentDTO);
            // 위와 동일
            // studentDTO studentDTO = new Student();
            // studentDTO.setName("이름") ....
        }
        return students;
    }
}
