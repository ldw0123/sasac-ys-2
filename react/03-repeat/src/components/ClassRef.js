// 클래스형 컴포넌트 useRef()

import { Component, createRef } from 'react';
class ClassRef extends Component {
  input2 = createRef(); // createRef() 메서드 이용

  // 콜백함수를 이용하여 ref를 지정했을 때, ref 변수를 사용하는 방법
  focusInput = () => {
    this.input.focus(); // .focus()로 접근
  };

  focusInput2 = () => {
    this.input2.current.focus(); // .current.focus()로 접근
  };

  // render() 필수! render() {} 안의 return값이 화면에서 보게 된다
  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 useRef() 함수 공부</h3>
        {/* 콜백함수 이용하여 ref를 지정하는 방법. 콜백함수의 첫 번째 매개변수는 input 태그 자체 */}
        <input
          type="text"
          ref={(ref) => {
            // ref에 콜백함수를 넘길 때 첫번 째 매개변수는 ref가 걸려 있는 요소를 담고 있다
            // ref라는 변수에 input 태그가 담긴다
            // this 객체의 input 필드에 ref 변수를 대입
            this.input = ref;
          }}
        />
        <button type="button" onClick={this.focusInput}>
          버튼
        </button>

        {/* input2 변수를 이용 */}
        <input type="text" ref={this.input2} />
        <button type="button" onClick={this.focusInput2}>
          버튼
        </button>
      </>
    );
  }
}

export default ClassRef;
