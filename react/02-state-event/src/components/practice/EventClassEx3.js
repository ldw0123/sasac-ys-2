// 함수형 컴포넌트 Event Handling 실습3

import { useState } from 'react';

function EventClassEx3() {
  const [text, setText] = useState('안녕하세요');

  return (
    <>
      <h4>컴포넌트 event handling 실습 3</h4>
      <div>{text} </div>
      <button
        onClick={() => {
          // 동기 처리
          setText((prevNumber) => setText(''));
        }}
      >
        사라져라
      </button>
      <button
        onClick={() => {
          // 동기 처리
          setText((prevNumber) => setText('안녕하세요'));
        }}
      >
        보여라
      </button>
      <br />
      <br />
    </>
  );
}

export default EventClassEx3;
