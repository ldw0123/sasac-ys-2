import './App.css';
import ListMap from './components/ListMap';
import ListMapEx1 from './components/ListMapEx1';
import ListMapEx2 from './components/ListMapEx2';
import FuncRef from './components/FuncRef';
import ClassRef from './components/ClassRef';
import ScrollBox from './components/ScrollBox';

function App() {
  return (
    <div>
      <ListMap />
      <FuncRef />
      <ClassRef />
      <ScrollBox />

      {/* 실습 */}
      <ListMapEx1 />
      <ListMapEx2 />
    </div>
  );
}

export default App;
