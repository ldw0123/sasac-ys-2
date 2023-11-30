// 함수형 컴포넌트 State 실습

import { useState } from 'react';

function PracStateFunc() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 2);
  };

  return (
    <>
      <hr />
      <h4>함수형 컴포넌트 State 실습</h4>
      number state value {number} <button onClick={increase}>+1</button>{' '}
      <button onClick={decrease}>-2</button>
    </>
  );
}

export default PracStateFunc;
