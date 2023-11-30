// ⭐ 함수형 컴포넌트 Event Handling

import { useState } from 'react'; // hook 이용

function EventFunc() {
  // const [문자열, 문자열 변경 함수]
  const [msg, setMsg] = useState('hello');
  const [name, setName] = useState('');

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg('bye');
  };

  function handleOnClickHello() {
    setMsg('hello');
  }

  const handleOnClickTest = (message) => {
    console.log('this: ', this);
    setMsg(message);
  };

  const handleEnter = (e) => {
    if (e.key == 'Enter') {
      console.log('엔터가 눌렸습니다');
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 event handling 공부</h3>
      <div>
        {msg} <button onClick={handleOnClick}>잘 가</button>{' '}
        <button onClick={handleOnClickHello}>안 녕</button>{' '}
        {/* 함수에서 매개변수를 받고 싶을 때 */}
        {/* 방법 1) onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다 */}
        <button
          onClick={() => {
            handleOnClickTest('안녕?');
          }}
        >
          테스트 1
        </button>{' '}
        {/* 방법 2) .bind를 이용 */}
        {/* bind() 함수: 함수 안에서 사용 가능. 인자를 여러 개 넘길 수 있다. 첫 번째 인자는 무조건 앞에 있는 함수(handleOnClickTest)의 this를 결정한다 */}
        {/* 두 번째 인자로는 원하는 값을 넘겨준다 */}
        <button onClick={handleOnClickTest.bind(null, '안녕ㅎㅎ')}>
          테스트 2
        </button>{' '}
        {/* input 태그에서 엔터키를 누르면 함수가 실행되도록 하고 싶으면? */}
        <input
          type="text"
          value={name} // 아무리 문자열을 입력을 해도 입력이 안 됨. 8번 줄에서 빈 값으로 name을 선언했기 때문
          onChange={(e) => {
            // onChange로 설정해 주면 입력 잘 됨
            console.log(e.target);
            setName(e.target.value);
          }}
          onKeyDown={handleEnter} // onkeyUp / onkeyDown : 키를 누를 때 동작
        />
      </div>
    </>
  );
}

export default EventFunc;
