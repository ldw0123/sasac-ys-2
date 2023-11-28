import './App.css'; // css 불러오기
import ClassComponent from './components/ClassComponent'; // ClassComponent 불러오기
import FuncComponent from './components/FuncComponent'; // FuncComponent 불러오기

function App() {
  return (
    //  <FuncComponent /> : FuncComponent.js 불러오기
    <div>
      <FuncComponent />
      <FuncComponent></FuncComponent>
      <br />
      <ClassComponent />
    </div>
  );
}

export default App;
