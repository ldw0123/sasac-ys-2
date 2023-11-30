// 웹 화면에서 보기위해 App.js 에서 조작

import './App.css';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';
import EventClass from './components/EventClass';
import EventFunc from './components/EventFunc';

import PracStateClass from './components/practice/StateClassEx';
import PracStateFunc from './components/practice/StateFuncEx';
import EventClassEx1 from './components/practice/EventClassEx1';
import EventClassEx2 from './components/practice/EventClassEx2';
import EventClassEx3 from './components/practice/EventClassEx3';
import EventClassEx4 from './components/practice/EventClassEx4';

function App() {
  return (
    <div>
      {/* StateClass() 불러오기 */}
      <StateClass name="lily" />
      <StateFunc />
      <EventClass />
      <EventFunc />

      {/* 실습 */}
      <PracStateClass />
      <PracStateFunc />
      <EventClassEx1 />
      <EventClassEx2 />
      <EventClassEx3 />
      <EventClassEx4 />
    </div>
  );
}

export default App;
