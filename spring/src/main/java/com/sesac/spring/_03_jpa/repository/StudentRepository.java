package com.sesac.spring._03_jpa.repository;

import com.sesac.spring._03_jpa.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
  MyBatis -> mapper
  jpa(orm) -> repository
  repository: Entity 에 의해서 만들어진 테이블에 접근하는 메서드들을 정의해놓은 인터페이스. CRUD 를 하기 위한 메서드를 정의하는 계층
  JpaRepository 제공 ->
    - 전체 조회
    - 아이디로 조회
    - 전체 삭제
*/

// Repository interface
@Repository
// JpaRepository<대상으로 지정할 entity, 해당 entity 의 pk 타입>
public interface StudentRepository extends JpaRepository<Student, Integer> {
    // 1. JPA 의 기본 규칙을 따르는 방법
    // findBy컬럼명 : 그 컬럼으로 검색한다
    // findBy 로 검색을 할 때는 이름이 겹칠 수 있으니, List 로 감싸야 안전하다
    // primary key, unique key 로 검색을 할 때
    List<Student> findByName(String name); // name 컬럼 검색
//    Student findByNickname(String nickname); // nickname 컬럼 검색

    // 이름과 닉네임이 모두 일치하는 경우
    List<Student> findByNameAndNickname(String name, String nickname);

    // 이름이 일치하거나 닉네임이 일치하는 경우
    List<Student> findByNameOrNickname(String name, String nickname);

    // findByAgeGreaterThanEqual(int age) // age 가 값보다 크거나 같은 경우


    // 2. 직접 쿼리를 작성해서 연결
    // @Query: 쿼리를 직접 작성
//    @Query("select s from Student s where s.name = :name") // JPA 쿼리
    @Query(nativeQuery = true, value = "select * from student where name= :a")
    // nativeQuery : 원래 작성하던 쿼리. nativeQuery = true 옵션을 걸어주어야 한다
    List<Student> findTest(String name);
}
