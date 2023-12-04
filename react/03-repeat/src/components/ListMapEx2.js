import { useState, useRef } from 'react';

function ListMapEx2() {
  // 빈 배열 설정
  const userData = [];

  const [list, setList] = useState(userData);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // 정보 추가하는 메서드
  const addData = () => {
    const newObj = {
      id: list.length + 1,
      name: newName,
      email: newEmail,
    };
    const newList = list.concat(newObj);

    setList(newList);

    setNewName('');
    setNewEmail('');
  };

  // 검색하는 메서드
  const searchData = () => {};

  // useRef()
  const nameInput = useRef(); // ref 객체 생성
  const emailInput = useRef();

  // 작성자와 제목이 비어있는지 확인하고, 비어있는 경우 포커스를 주는 함수
  const checkInputValue = () => {
    if (newName.trim().length === 0) {
      nameInput.current.focus();
      return false;
    }

    if (newEmail.trim().length === 0) {
      emailInput.current.focus();
      return false;
    }

    return true;
  };

  return (
    <>
      <h3>ListMap 실습 3, 4 / Ref 실습</h3>
      <fieldset style={{ width: '500px' }}>
        <label>작성자: </label>
        <input
          type="text"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          ref={nameInput}
          placeholder="이름"
        />{' '}
        <label>제목: </label>
        <input
          type="text"
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
          ref={emailInput}
          placeholder="제목"
        />{' '}
        <button
          onClick={() => {
            addData();
            checkInputValue();
          }}
        >
          작성
        </button>
      </fieldset>
      <br />
      <select
      // value={backgroundColor}
      // onChange={(e) => setBackgroundColor(e.target.value)}
      >
        <option value={'B-black'}>작성자</option>
        <option value={'B-white'}>제목</option>
      </select>{' '}
      <input type="text" placeholder="검색어" />{' '}
      <button onClick={searchData}>검색</button> <button>전체</button>
      <br />
      <br />
      {/* 리스트 출력 */}
      <table border="1" cellSpacing="0" width="530" cellpadding="5">
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </thead>

        <tbody>
          {list.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.email}</td>
              <td>{value.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </>
  );
}

export default ListMapEx2;
