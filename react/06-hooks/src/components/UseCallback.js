import { useCallback, useState } from 'react'; // useCallback(), useState() hook 불러오기

export default function UseCallback() {
  const [text, setText] = useState('');

  // ⭐ useCallback: 함수를 기억한다
  // 일반적으로 컴포넌트가 렌더링될 때, 컴포넌트 내부에 있는 함수도 다시 선언하게 된다
  // 다시 선언할 필요가 없는 함수는 다시 선언하지 않고, 이전에 선언한 함수를 사용할 수 있는 것이 좋다. 이것을 도와 주는 것이 useCallback hook

  // 의존성 배열에 명시된 값들이 변경될 때에만 함수를 다시 생성하도록 도와준다
  // 의존성 배열이 빈 값일 경우, 첫 mount될 때 선언된 함수를 계속 기억하고 있다가, update될 때 다시 선언하지 않고 기억하고 있는 함수를 사용한다

  // 컴포넌트 내부에서 변경될 수 있는 값은? 대표적으로 state, props가 있다
  // handleOnChange 함수에서는 UseCallback 컴포넌트에서 유일하게 변경될 수 있는 값인 text를 활용하고 있지 않다
  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
    console.log('text......');
  }, []);

  return (
    <>
      <h2>useCallback 공부 1</h2>
      <input type="" value={text} onChange={handleOnChange} />
    </>
  );
}

// useMemo vs useCallback
// useMemo: 특정 값을 기억하여, 불필요한 연산을 방지
// useCallback: 특정 함수를 기억하여, 불필요한 재선언을 방지
