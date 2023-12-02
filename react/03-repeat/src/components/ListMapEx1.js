import { useState } from 'react';

function ListMapEx1() {
  const userData = [{ id: '', name: '', email: '' }];

  const [list, setList] = useState(userData);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // 정보 추가하는 메서드
  const addData = () => {
    const newObj = {
      id: list[list.length - 1].id + 1,
      name: newName,
      email: newEmail,
    };
    const newList = list.concat(newObj); // 합치는 방법: .concat() 메서드 이용
    // setList 함수 이용
    setList(newList);

    // 데이터 추가 후 입력 필드 초기화
    setNewName('');
    setNewEmail('');
  };

  // 더블클릭하면 삭제하는 메서드
  const deleteData = (id) => {
    // filter() 메서드: 앞에 있는 배열을 반복
    // filter() 메서드의 반환값은 조건이 되어야 한다. 조건이 true일 경우, 해당 원소는 새로운 배열에 포함 / false일 경우, 포함하지 않음

    // const newList = list.filter((value) => {
    //   return value.id != id; // value.id가 id가 아니면
    // });
    // 위와 아래의 코드 완전 동일 (return을 직접 명시하지 않고 return 가능!)
    const newList = list.filter((value) => value.id != id);

    // rendering할 때 list배열을 이용한다 -> 원하는 원소를 삭제해야 한다
    // 삭제된 배열을 setList를 이용하여 list의 상태를 변경 -> 렌더링
    setList(newList);
  };

  // Enter키를 누르면 정보가 추가되는 메서드
  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      addData();
    }
  };

  return (
    <>
      <h3>ListMap 실습 1, 2</h3>
      <input
        type="text"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        placeholder="이름"
      />{' '}
      <input
        type="text"
        value={newEmail}
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
        onKeyDown={handleEnter} // onkeyUp / onkeyDown : 키를 누를 때 동작
        placeholder="이메일"
      />{' '}
      <button onClick={addData}>등록</button>
      {/* 리스트 출력 */}
      <ul>
        {list.map((value) => (
          <h3
            style={{ cursor: 'pointer' }}
            key={value.id}
            onDoubleClick={() => {
              deleteData(value.id);
            }}
          >
            {value.name} {value.email}
          </h3>
        ))}
      </ul>
    </>
  );
}

export default ListMapEx1;
