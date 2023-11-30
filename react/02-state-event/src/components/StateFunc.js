// ⭐ 함수형 컴포넌트 state
// 함수형 컴포넌트에서 state를 이용하려면 hook이 필요함

import { useState } from 'react'; // hook 이용. useState 클래스 불러오기

function StateFunc() {
  // useState는 배열을 반환. 그 배열을 구조분해해서 number와 setNumber 선언
  // const [state 변수, state를 변경시키는 함수] = useState(state 초기값)
  const [number, setNumber] = useState(0); // hook
  const [text, setText] = useState('hello');

  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>number state value {number} </div>
      <button
        onClick={() => {
          // 비동기. 아래처럼 하면 +2 가 되지 않음
          // setNumber(number + 1);
          // setNumber(number + 1);

          // 동기 처리
          setNumber((prevNumber) => prevNumber + 2);
        }}
      >
        +2
      </button>
    </>
  );
}

export default StateFunc;
