// ⭐ 함수형 컴포넌트 LifeCycle

import { useEffect, useState } from 'react';

function LifeCycle(props) {
  const { number } = props;
  const [text, setText] = useState('');

  // ⭐ useEffect(인자1 콜백함수, 인자2 의존성 배열)
  // 1. 의존성 배열이 빈 배열일 경우
  // mount될 때 콜백함수를 실행시킨다
  // unmount될 때 콜백함수 내부에서 return 뒤에 오는 함수를 실행시킨다
  useEffect(() => {
    console.log('function component: ⭕ mount'); // 컴포넌트가 mount될 때

    return () => {
      console.log('function component: ❌ unmount'); // 컴포넌트가 unmount될 때
    };
  }, []);

  // 2. 의존성 배열을 전달하지 않을 경우
  // mount 혹은 update될 때 콜백함수를 실행시킨다
  useEffect(() => {
    console.log('function component: ✅ update'); // 컴포넌트가 mount 혹은 update될 때
  });

  // 3. 의존성 배열에 원소가 존재할 경우
  // 배열의 원소가 update(변경)될 때 마다 콜백함수를 실행시킨다
  useEffect(() => {
    console.log('function component: ✅✅ text update'); // 텍스트가 update될 때
  }, [text]);

  return (
    <>
      <h2>함수형 컴포넌트 LifeCycle 공부</h2>
      <div>number: {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // 값을 입력할 때마다 onChange를 발동해서 value값으로 텍스트 수정
      />
    </>
  );
}

export default LifeCycle;
