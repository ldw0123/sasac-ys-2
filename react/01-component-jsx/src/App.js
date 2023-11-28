import './App.css'; // App.css 불러오기
import ClassComponent from './components/ClassComponent'; // ClassComponent 불러오기
import FuncComponent from './components/FuncComponent'; // FuncComponent 불러오기

const name2 = '핑핑이';
const animal2 = '강아지';
let a = 5;
let b = 4;
const title = 'Hello World';

function App() {
  return (
    <div>
      {/* FuncComponent.js 불러오기 */}
      <FuncComponent />
      {/* <FuncComponent></FuncComponent> */}
      <br />
      {/* ClassComponent.js 불러오기 */}
      <ClassComponent />
      <br />
      {/* 실습1 */}
      <h4>제 반려 동물의 이름은 {name2}입니다.</h4>
      <h4>
        {name2}는 {animal2}입니다.
      </h4>
      {/* 실습2 */}
      <h4>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</h4>
      {/* 실습3 */}
      <h4>{a > b ? 'a가 b보다 큽니다' : 'b가 a보다 큽니다'}</h4>
      {/* 실습4 */}
      <div>
        <div className="practice1">{title}</div>
        <br />
        <div className="practice2">
          아이디: <input type="text" />
          <br />
          <br />
          비밀번호: <input type="password" />
        </div>
      </div>
    </div>
  );
}

export default App;
