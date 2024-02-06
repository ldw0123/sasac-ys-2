package com.sesac.spring._02_mybatis.mapper;

import com.sesac.spring._02_mybatis.domain.Board;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

// Mapper 는 클래스가 아닌 interface!
// SQL 을 작성하거나, xml 파일을 작성하거나 둘 중 하나로 하면 된다
@Mapper
public interface BoardMapper {
    List<Board> getBoardAll(); // 전체 조회. SQL 이라면 (select * from board;)
    void  insertBoard(Board board); // 삽입 (insert)

    void patchBoard(Board board); // 수정 (update)

    void deleteBoard(int id); // 삭제 (delete)

    List<Board> searchBoard(String word); // 검색(조회)
}

// 1) mapper 에는 메서드가 있고, ,xml 에는 없는 경우 -> 실행했을 떄 오류
// 2) xml 에는 메서드가 있고, mapper 에는 없는 경우 -> 실행 자체가 안 됨
