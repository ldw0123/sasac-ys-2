// ⭐ 클래스형 컴포넌트 state

import { Component } from 'react'; // 리액트에서 만든 Component 클래스 불러오기

class StateClass extends Component {
  // ⭐ 옛날 방식 (생성자 이용)
  // constructor() {
  //   super(); // super(): 부모 클래스의 생성자를 호출해서 부모 클래스의 속성과 메서드를 상속 받는다
  //   // super를 실행시켜야 this 객체를 사용할 수 있다

  //   // state 변수 생성 (객체 형태)
  //   this.state = {
  //     number: 0,
  //     Text: 'hello',
  //   };
  // }

  // 만약 생성자를 구현하지 않으면, 기본 생성자가 자동으로 실행된다
  // 하지만, 생성자를 만들면 부모 생성자를 호출해 주어햐 한다
  // constructor(props) { // 기본 생성자
  //   super();
  // }

  // ⭐ 요즘 방식 (간단!)
  state = {
    number: 0,
    text: 'hello',
  };

  render() {
    // render 함수 필수!

    // const { number } = this.state; // 구조분해 형태로도 사용 가능!

    return (
      <>
        <h3>클래스형 컴포넌트 state 공부</h3>
        <div>props 예시 {this.props.name}</div> <br />
        <div>
          number state value {this.state.number}{' '}
          <button
            // onClick은 함수 형태로 사용
            onClick={() => {
              // state변경은 일반 변수 변경 시키듯이 변수에 값을 재할당 하는 것이 아닌,
              // state를 변경시키는 함수를 사용한다. 클래스형 컴포넌트는 setState() 메서드가 제공된다 (component 클래스에 있는 메서드)

              // this.setState({ number: this.state.number + 1 });
              // this.setState({ number: this.state.number + 1 });

              // setState를 연달아 2번 사용해야 할 때, 위처럼 2번 작성해 사용하면 원하는 결과를 얻을 수 없음
              // state는 비동기 작업이기 때문. 첫 번째 줄의 결과를 기다리지 않고, 값이 바뀌기 전에 아래 줄이 실행됨

              // 콜백함수 이용 (동기 처리)
              // 이름을 임의로 정한 매개변수 prevState는 컴포넌트의 현재 상태를 참조한다
              this.setState((prevState) => {
                return { number: prevState.number + 1 };
              });
              // 위와 아래 코드는 완전 동일
              this.setState((prevState) => ({ number: prevState.number + 1 }));
            }}
          >
            +2
          </button>
        </div>
      </>
    );
  }
}

export default StateClass;

// 두 함수는 완전 동일
// const getNumber = () => {
//     return 5;
// }

// const getNumber2 = () => 5;
