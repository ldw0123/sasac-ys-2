import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

// App.js 에서만 쓰이는 간단한 컴포넌트 생성
function Box1() {
  const [number, setNumber] = useState(100);
  const inscrese = () => setNumber(number + 1);
  const descrese = () => setNumber(number - 1);

  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box2 number={number} inscrese={inscrese} descrese={descrese} />
    </div>
  );
}

function Box2(props) {
  const { number, inscrese, descrese } = props;
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 number={number} inscrese={inscrese} descrese={descrese} />
    </div>
  );
}

function Box3(props) {
  return (
    <div className="box">
      <Box4
        number={props.number}
        inscrese={props.inscrese}
        descrese={props.descrese}
      />
    </div>
  );
}

// props를 바로 객체 구조분해로 넘겨 받을 수 있다
function Box4({ number, inscrese, descrese }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={inscrese}>plus</button>
      <button onClick={descrese}>minus</button>
    </div>
  );
}

export default App;
