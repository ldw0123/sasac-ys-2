// 클래스형 컴포넌트 State 실습

import { Component } from 'react'; // Component 클래스 불러오기

class PracStateClass extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <>
        <hr />
        <h4>클래스형 컴포넌트 State 실습</h4>
        number state value {this.state.number}{' '}
        <button
          onClick={() => {
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +2
        </button>{' '}
        <button
          onClick={() => {
            this.setState((prevState) => ({ number: prevState.number - 1 }));
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default PracStateClass;
