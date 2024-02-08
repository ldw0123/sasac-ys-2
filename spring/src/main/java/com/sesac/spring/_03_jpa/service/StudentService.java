package com.sesac.spring._03_jpa.service;

import com.sesac.spring._03_jpa.dto.StudentDTO;
import com.sesac.spring._03_jpa.entity.Student;
import com.sesac.spring._03_jpa.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    // 1. 전체 검색 ( select * from student)
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

    // 2. 삽입 ( insert into ~~~ )
    public String insertStudent(String name, String nickname, Student.LoginType type) {
        // controller 에서 받아온 데이터로 repository 의 sava 메서드를 호출
        Student student = Student.builder().name(name).nickname(nickname).type(type).build();
        Student newStudent = studentRepository.save(student); // repository 에 저장
        // newStudent: save 를 한 후, 반환되는 Entity 객체

        return newStudent.getId() + newStudent.getName();
    }

    // 3. 조건에 따른 검색1 ( select * from student where name='' )
    public String searchStudentByName(String name) {
        // findByName 은 없으므로, StudentRepository 에 만들어 주어야 함
        List<Student> student = studentRepository.findByName(name);
//        return "id는 " + student.getId() + "입니다";
        return "해당하는 이름의 사용자는 " + student.size() + "명 입니다";
    }

    // 4. 조건에 따른 검색2 ( select * from student where id = )
    public String searchStudentById(int id) {
        // findById 는 기본적으로 있음

        Student student = studentRepository
                .findById(id)
//                .orElse(new Student())
                .orElseThrow(()->new RuntimeException("사용자가 없습니다!"));
        // orElse() : 있으면 객체를 반환, 없으면 다른 객체를 반환
        // orElseThrow() : 있으면 객체를 반환, 없으면 다른 error 처리

        return student.getName();

//        Optional<Student> student = studentRepository.findById(id);
//        if(student.isPresent()) {
//            // isPresent() : 객체의 여부를 boolean 으로 반환
//            return student.get().getName();
//            // get() : Optional 에 담긴 객체를 반환
//        }
//        return "null";
        
        // Optional<T> : null 일 수도 있는 객체를 감싸는 wrapper 클래스. java 8 부터 등장

        // [실습 1]
//        public int searchCntByNickname(String nickname) {
//            // count 라는 method 를 활용
//            // countByNickname(String nickname) = select count(*)
//            return studentRepository.countByNickname(nickname);
//        }
//        // [실습 2]
//        public String updateStudent(int id, String name) {
//            studentRepository.save(Student)
//            // save() : 새로운 Entity 를 insert 하거나, 기존 Entity 를 update
//            // insert, update 를 할 때, 기존 객체를 건드리지 않고 객체를 새로 만들어주어야 한다
//            // T의 기본값(pk)의 상태에 따라 다르게 동작
//            // - pk 값이 존재하는 경우: pk와 연결된 Entity 를 update
//            // - pk 값이 없는 경우: 새로운 entity 를 insert
//            Student student = studentRepository.findById(id)
//                    .orElseThrow(()->new NoSuchElementException("id is wrong"));
//
//            Student modifiedStudent =
//                    Student.builder().id(id).name(name).nickname(student.getNickname()).type(student.getType()).build();
//
//            studentRepository.save(modifiedStudent);
//            return "UPDATE SUCCESS";
        }

    }
}
