import { useState } from 'react';
import './App.css';
import LifeCycle from './components/LifeCycleFunc';
import LifeCycleClass from './components/LifeCycleClass';
import LifeCycleEx from './components/Practice/LifeCycleFuncEx';
import LifeCycleAxios from './components/Practice/LifeCycleAxios';
import LifeCycleFetch from './components/Practice/LifeCycleFetch';

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      {/* mount를 위해 버튼 만들기 */}
      <button onClick={() => setNumber(number + 1)}>Plus</button>{' '}
      {/* unmount를 위해 토글 버튼 만들기. true일 경우 false로, false일 경우 true로 */}
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? 'OFF' : 'ON'}
      </button>
      {/* isShow가 참일 때만 LifeCycleFunc 컴포넌트가 렌더링된다 */}
      {/* {isShow ? <LifeCycle /> : null} */}
      {/* 위와 아래 코드 동일 */}
      {isShow && <LifeCycle number={number} />}
      {isShow && <LifeCycleClass number={number} />}
      {/* 실습 */}
      <LifeCycleEx />
      <LifeCycleAxios />
      <LifeCycleFetch />
    </div>
  );
}

export default App;
