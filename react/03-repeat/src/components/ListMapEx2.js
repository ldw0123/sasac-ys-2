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
  const input = useRef(); // ref 객체 생성

  // input에 focus를 주는 메서드
  const focusInput = () => {};

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
          ref={input}
          placeholder="이름"
        />{' '}
        <label>제목: </label>
        <input
          type="text"
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
          ref={input}
          placeholder="제목"
        />{' '}
        <button
          onClick={() => {
            addData();
            focusInput();
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
