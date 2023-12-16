// ⭐ Ver.4
// Container 컴포넌트: 기능 구현 당담
import { useSelector, useDispatch } from 'react-redux';
import { Box1, Box2, Box4 } from '../components/Boxes';
import { increase, decrease } from '../store/counterReducer'; // increase, decrease 함수 호출

export function Box1Container() {
  const number = useSelector((state) => state.counter.number); // store에 접근
  return <Box1 number={number} />;
}

export function Box2Container() {
  const number = useSelector((state) => state.counter.number);
  return <Box2 number={number} />;
}

export function Box4Container() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const counterIncrease = () => dispatch(increase());
  const counterDecrease = () => dispatch(decrease());
  const isDataChange = () => dispatch({ type: 'CHANGE' });

  return (
    <Box4
      number={number}
      isData={isData}
      counterIncrease={counterIncrease}
      counterDecrease={counterDecrease}
      isDataChange={isDataChange}
    />
  );
}
