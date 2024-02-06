package com.sesac.spring._03_jpa.repository;

import com.sesac.spring._03_jpa.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  MyBatis -> mapper
  jpa(orm) -> repository
  repository: Entity 에 의해서 만들어진 테이블에 접근하는 메서드들을 정의해놓은 인터페이스. CRUD 를 하기 위한 메서드를정의하는 계층
  JpaRepository 제공 ->
    - 전체 조회
    - 아이디로 조회
    - 전체 삭제
*/

// Repository interface
@Repository
// JpaRepository<대상으로 지정할 entity, 해당 entity 의 pk 타입>
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
