// custom hooks만들기

import useToggle from '../hooks/useToggle'; // custom hook 불러오기

export default function CustomHook(initialValue) {
  const [isPopup, togglePopup] = useToggle(false); // 초기값 false: 안 보임

  return (
    <>
      <h2>custom hooks 공부</h2>
      {isPopup && <div>보여요</div>}
      <button onClick={togglePopup}>토글</button>
    </>
  );
}
