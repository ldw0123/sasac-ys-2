import { useCallback, useReducer, useState } from 'react';

// ⭐ useReducer()
// 현재 상태와 액션을 받아 새로운 상태를 반환하는 역할을 한다
// 컴포넌트에서 dispatch() 함수를 호출하여 액션을 전달하면, reducer 함수가 실행되어 상태가 업데이트되고 화면이 다시 렌더링된다
// 복잡한 상태 관리 로직을 효과적으로 다룰 수 있으며, 특히 컴포넌트가 여러 상태 값을 관리해야 하는 경우에 선호된다

// state: 상태
// dispatch: 액션을 발생시키는 함수 (reducer()를 실행시킴)
// reducer: 실질적으로 상태를 업데이트하는 함수

const initialValue = { value: 0 };
// const reducer = (이전 상태 값, 액션) => {}
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { value: prevState.value + 1 };
    case 'MINUS':
      return { value: prevState.value - 1 };
    case 'MULTIPLY':
      // action으로 number를 넘겨받는다
      return { value: prevState.value * action.number };
    case 'DEVIDE':
      return { value: prevState.value / action.number2 };
    case 'RESET':
      return initialValue;
    default:
      return { value: prevState.value };
  }
};

export default function UseReducer() {
  // const [state 현재 상태, dispatch() 함수] = useState(reducer() 함수, initialState 상태의 초기값)
  // dispatch() 함수를 호출하면 reducer() 함수를 실행시켜 상태가 업데이트되고 화면이 다시 렌더링된다

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  // useCallback hook
  // 곱하기
  const handleOnChangeNumber = useCallback(
    (e) => setNumber(e.target.value),
    []
  );

  // 나누기
  const handleOnChangeNumber2 = useCallback(
    (e) => setNumber2(e.target.value),
    []
  );

  const plus = () => dispatch({ type: 'PLUS' });
  const minus = () => dispatch({ type: 'MINUS' });
  // number: number - 액션으로 number를 넘겨준다
  const multiply = () => dispatch({ type: 'MULTIPLY', number: number });
  const divide = () => dispatch({ type: 'DEVIDE', number2: number2 });
  const reset = () => dispatch({ type: 'RESET' });

  // 아래 코드는 +, -, 초기화만 하고 있다. 하지만 곱하기, 나누기 등 더 많은 연산을 한다고 하면 컴포넌트 자체가 복잡해져서 코드가 길어진다
  // 복잡해질 때 사용할 수 있는 것이 reducer
  // state의 변화를 추적하고 싶으면 setState를 일일이 검색해서 찾아가면서 +1도 되구나.. -1도 되구나.. 알게 된다
  // reducer를 사용하면 reducer 함수만 읽으면 한 곳에서 몰아서 읽으면 되니까 편리하다
  // const [state, setState] = useState(initialValue);
  // const plus = () => setState(state.value + 1);
  // const minus = () => setState(state.value - 1);
  // const reset = () => setState(initialValue);

  return (
    <>
      <h2>useReducer 공부</h2>
      <div>
        {state.value} <button onClick={reset}>reset</button>{' '}
        <button onClick={plus}>+1</button> <button onClick={minus}>-1</button>{' '}
        <br />
        <input
          type="number"
          value={number}
          onChange={handleOnChangeNumber}
        />{' '}
        <button onClick={multiply}>곱하기</button>
        <br />
        <input
          type="number"
          value={number2}
          onChange={handleOnChangeNumber2}
        />{' '}
        <button onClick={divide}>나누기</button>
      </div>
    </>
  );
}
