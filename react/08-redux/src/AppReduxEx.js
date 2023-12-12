// ⭐ Redux 실습

import './App.css';
import { useDispatch, useSelector } from 'react-redux'; // useSelector hook 불러오기
import { increase, decrease } from './store/storeEx/counterReducerEx.js'; // counterReducerEx.js에서 만든 함수 불러오기

function AppReduxEx() {
  return (
    <div>
      <h3>Redux 실습</h3>
      <Box />
    </div>
  );
}

function Box() {
  const number = useSelector((state) => state.counter.number);
  // dispatch: 액션을 발생시키는 함수. 액션은 상태 변화를 일으키는 객체
  const dispatch = useDispatch();

  return (
    <div>
      <input />
      <h3>잔액: {number}</h3>
      {/* <input type="number" value={} onChange={} /> */}
      <button onClick={() => dispatch(increase())}>입금</button>
      <button onClick={() => dispatch(decrease())}>출금</button>
    </div>
  );
}

export default AppReduxEx;
