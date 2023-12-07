import { useMemo, useState } from 'react'; // useMemo(), useState() hook 불러오기

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  // [before]
  // 문제점: count 변수가 변경되지 않아도, 렌더링될 때 마다 다시 연산을 한다 -> 비효율적
  // text state를 변경할 때마다 calc() 함수가 실행된다
  // const calc = () => {
  //   console.log('calc......');
  //   return count * count;
  // };

  // [after]
  // ⭐ useMemo(콜백함수 () => {}, 의존성 배열 [])
  // useMemo : rendering할 때, 불필요한 연산을 방지한다. 이전에 계산된 값을 기억하고 동일한 값이 다시 필요할 때 다시 계산하지 않도록 도와준다
  // 의존성 배열에 명시된 값이 변경될 때에만, 콜백 함수가 다시 실행되어 새로운 값을 계산한다
  // 의존성 배열 [count] : 'count가 변경될 때마다' 라는 뜻. count의 변경이 있을 때만 다시 연산하여 calc에 담는다
  const calc = useMemo(() => {
    console.log('calc......');
    return count * count;
  }, [count]);

  return (
    <>
      <h2>useMemo 공부</h2>
      <div>
        count: {count} <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <div>calc : {calc}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
