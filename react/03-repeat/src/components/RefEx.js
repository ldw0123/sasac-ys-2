// Ref() 실습

import { useState, useRef } from 'react';

const RefPractice = () => {
  const [inputWriter, setInputWriter] = useState(''); // 작성자
  const [inputTitle, setInputTitle] = useState(''); // 제목
  const [comment, setComment] = useState([
    // 댓글
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ]);

  const writerInputElem = useRef();
  const titleInputElem = useRef();

  // 작성자와 제목이 비어있는지 확인하고, 비어있는 경우 포커스를 주는 함수
  const checkInputValue = () => {
    if (inputWriter.trim().length === 0) {
      writerInputElem.current.focus();
      return false;
    }

    if (inputTitle.trim().length === 0) {
      titleInputElem.current.focus();
      return false;
    }

    return true;
  };

  // 새로운 댓글을 추가하는 함수
  // 입력 필드의 값이 비어있는지 확인하고, 빈 값이 없는 경우 새 댓글을 comment 상태에 추가
  // 댓글이 추가된 후에는 작성자와 제목 입력 필드의 값을 초기화
  const addComment = () => {
    if (!checkInputValue()) {
      return;
    }

    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };

    setComment([...comment, newComment]);
    setInputWriter('');
    setInputTitle('');
  };

  return (
    <div>
      <h3>Ref() 실습</h3>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          ref={writerInputElem}
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목:</label>
        <input
          ref={titleInputElem}
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table
        border={1}
        cellSpacing="0"
        width="530"
        cellpadding="5"
        style={{ marginTop: '30px', width: '500px' }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RefPractice;
