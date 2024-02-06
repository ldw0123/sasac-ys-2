package com.sesac.spring.controller;

import com.sesac.spring.domain.Board;
import com.sesac.spring.dto.BoardDTO;
import com.sesac.spring.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/board/mybatis")
public class BoardController {
    // 5개의 method
    // 1. 전체 조회 (read) -> board.html 렌더링
    // 2. 작성 (create) : axios (동적 폼 전송, POST) -> @RequestBody
    // 3. 수정 (update) : axios (동적 폼 전송, PATCH)
    // 4. 삭제 (delete) : axios (동적 폼 전송, DELETE)
    // 5. 검색(조회) : axios (동적 폼 전송, GET)

    // 1. 전체 조회
    // SQL 작성(BoardMapper.xml), 도메인 작성(Board), DTO 생성(BoardDTO), Mapper 생성(BoardMapper), 서비스 생성(BoardService), 템플릿 파일 작성(board.html) 해야 함
    @Autowired
    BoardService boardService;

    @GetMapping("") // /board/mybatis
    public String getBoard(Model model) {
        List<BoardDTO> result = boardService.getBoardAll();
        model.addAttribute("list", result);
        return "board";
    }

    // 2. 게시글 작성
    @PostMapping("") // /board/mybatis
    @ResponseBody // 응답을 주기 위함
    public boolean insetBoard(@RequestBody BoardDTO boardDTO) {
        boardService.insertBoard(boardDTO);
        return true;
    }

    // 3. 수정
    @PatchMapping("") // board/mybatis
    @ResponseBody // @ResponseBody 가 없으면 템플릿 파일을 보여주는데, void 이면 현재 template 를 그대로 다시 보여준다
    public void patchBoard(@RequestBody BoardDTO boardDTO){
        boardService.patchBoard(boardDTO);
    }

    // 4. 삭제
    @DeleteMapping("") // board/mybatis
    @ResponseBody
    public void deleteBoard(@RequestParam int id) {
        boardService.deleteBoard(id);
    }

    // 5. 검색(조회)
    @GetMapping("/search") // board/mybatis/search
    @ResponseBody
    // board.html 의 searchBoard() 에서 param 으로 데이터를 받고 있음
    public int searchBoard(@RequestParam String word) {
        return boardService.searchBoard(word);
    }
    
}
