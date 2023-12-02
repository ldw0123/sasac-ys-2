import { useRef } from 'react';

function ScrollBox() {
  const box = useRef();
  const scrollTop = () => {
    box.current.scrollTop = 0;
  };
  return (
    <>
      <h3>Scroll Box</h3>
      <div className="scroll-box" ref={box}>
        <h1>hello</h1>
        <h1>lily</h1>
        <h1>lily</h1>
        <h1>lily</h1>
        <h1>lily</h1>
        <h1>lily</h1>
        <h1>lily</h1>
      </div>
      <br />
      <button onClick={scrollTop}>맨위로</button>
      <hr />
    </>
  );
}

export default ScrollBox;
