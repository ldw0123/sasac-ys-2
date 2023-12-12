// ⭐ Redux

import './App.css';
import { useDispatch, useSelector } from 'react-redux'; // useSelector hook 불러오기

function AppRedux1() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  // useSelector: store의 상태를 선택적으로 가져올 수 있다
  // 자동으로 state 객체의 number값을 불러온다
  const number = useSelector((state) => state.number);

  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.number);
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
  const number = useSelector((state) => state.number);
  // dispatch: 액션을 발생시키는 함수. 액션은 상태 변화를 일으키는 객체
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>plus</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>minus</button>
    </div>
  );
}

export default AppRedux1;
