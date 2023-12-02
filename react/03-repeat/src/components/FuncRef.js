// 함수형 컴포넌트 useRef()
import { useRef } from 'react'; // useRef()는 hook으로 메서드를 불러와야 함

function FuncRef() {
  // useRef() 역할: 1. DOM 요소에 직접 접근한다 / 2. 로컬변수로 사용
  const input = useRef(); // useRef 훅을 이용하여 ref 객체 생성
  const localVar = useRef(0); // 변수의 초기값을 0으로 설정
  // const localVar = 0; // 위와 동일

  const focusInput = () => {
    input.current.focus(); // input창에 focus를 준다
  };

  const plusLocalVar = () => {
    localVar.current++; // current가 있어야 접근 가능
    console.log(localVar.current);
  };

  return (
    <>
      <h3>함수형 컴포넌트 useRef() 함수 공부</h3>
      {/* ref 객체를 변수(여기서는 input태그)에 할당하고, */}
      {/* ref 객체를 ref 속성에 전달하여 해당 HTML 요소와 연결 */}
      <input type="text" ref={input} />{' '}
      <button type="button" onClick={focusInput}>
        버튼
      </button>
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        버튼
      </button>
      <br />
      <br />
    </>
  );
}

export default FuncRef;
