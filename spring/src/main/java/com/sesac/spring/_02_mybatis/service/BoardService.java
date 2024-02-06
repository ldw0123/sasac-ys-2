package com.sesac.spring.mybatis.service;

import com.sesac.spring.mybatis.domain.Board;
import com.sesac.spring.mybatis.dto.BoardDTO;
import com.sesac.spring.mybatis.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired // 의존성 주입
    BoardMapper boardMapper;

    // 1. 조회
    public List<BoardDTO> getBoardAll() {
        List<Board> result = boardMapper.getBoardAll();
        List<BoardDTO> boards = new ArrayList<>();

        for (Board board : result) {
            BoardDTO boardDTO = new BoardDTO();
            boardDTO.setBoardID(board.getId());
            boardDTO.setTitle(board.getTitle());
            boardDTO.setContent(board.getContent());
            boardDTO.setWriter(board.getWriter());
            boardDTO.setRegistered(board.getRegistered());
            boardDTO.setNo(100 + board.getId()); // 100을 더해서 No를 새로 만듦
            boards.add(boardDTO);
        }
        return boards;
    }

    // 2. 작성
    public boolean insertBoard(BoardDTO boardDTO) {
        Board board = new Board();
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        board.setWriter(boardDTO.getWriter());

        boardMapper.insertBoard(board);
        return true;
    }

    // 3. 수정
    public void patchBoard(BoardDTO boardDTO) {
        // board.getBoardID // title, content, writer
        Board board = new Board();
        board.setId(boardDTO.getBoardID()); // update 의 where 에 담긴다
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        board.setWriter(boardDTO.getWriter());

        boardMapper.patchBoard(board);
    }

    // 4. 삭제
    public void deleteBoard(int id) {
        boardMapper.deleteBoard(id);

    }

    // 5. 검색(조회)
    public int searchBoard(String word) {
        List<Board> result = boardMapper.searchBoard(word);
        return result.size();
    }

}
