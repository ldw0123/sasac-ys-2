// 웹 화면에서 보기위해 App.js 에서 조작

import './App.css';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';
import EventClass from './components/EventClass';

import PracStateClass from './components/PracStateClass';
import PracStateFunc from './components/PracStateFunc';
import EventFunc from './components/EventFunc';

function App() {
  return (
    <div>
      {/* StateClass.js 불러오기 */}
      <StateClass name="lily" />
      {/* StateFunc.js 불러오기 */}
      <StateFunc />
      <EventClass />
      <EventFunc />

      {/* 실습 */}
      <PracStateClass />
      <PracStateFunc />
    </div>
  );
}

export default App;
