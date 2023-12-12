// ⭐ Redux

import './App.css';
import { useDispatch, useSelector } from 'react-redux'; // useSelector hook 불러오기
import { increase, descrese } from './store/counterReducer'; // counterReducer.js에서 만든 함수 불러오기

function AppRedux2() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  // useSelector: store의 상태를 선택적으로 가져올 수 있다
  // 자동으로 state 객체의 number값을 불러온다
  const number = useSelector((state) => state.counter.number);
  // 원래는 state.number로 하지만, store/index.js에서 불러오려면 key값이 counter이므로 state.counter.number로 접근해야 한다

  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4 />
    </div>
  );
}

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  // dispatch: 액션을 발생시키는 함수. 액션은 상태 변화를 일으키는 객체
  const dispatch = useDispatch();

  return (
    // reducer는 달라도 dispatch는 동일하게 사용!
    <div className="box">
      <h3>number: {number}</h3>
      {/* <button onClick={() => dispatch({ type: 'INCREMENT' })}>plus</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>minus</button> */}
      <button onClick={() => dispatch(increase())}>plus</button>
      <button onClick={() => dispatch(descrese())}>minus</button>

      <div>isData: {`${isData}`}</div>
      <button onClick={() => dispatch({ type: 'CHANGE' })}>change</button>
    </div>
  );
}

export default AppRedux2;
