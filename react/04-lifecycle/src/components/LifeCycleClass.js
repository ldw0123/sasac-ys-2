// ⭐ 클래스형 컴포넌트 LifeCycle

import { Component } from 'react';

class LifeCycleClass extends Component {
  state = { text: '' };

  // 1. 컴포넌트가 mount될 때 자동으로 실행된다
  componentDidMount() {
    console.log('class component: ⭕ mount'); // mount될 때
  }

  // 2. 컴포넌트가 update될 때 자동으로 실행된다
  // componentDidUpdate(인자 1. 이전 props값, 인자2. 이전 State값, 인자 3. ~~ 필요x)
  componentDidUpdate(prevProps, prevState) {
    console.log('class component: ✅ update'); // 컴포넌트가 update될 때 (mount될 때는 x)

    // 3. text state가 변경될 때 마다 if문 안에 있는 코드를 실행시킨다
    if (prevState.text != this.state.text) {
      console.log('class component: ✅✅ text update'); // 텍스트가 update될 때
    }
  }

  // 4. 컴포넌트가 unmount될 때 자동으로 실행된다
  componentWillUnmount() {
    console.log('function component: ❌ unmount'); // 컴포넌트가 unmount될 때
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트 LifeCycle 공부</h2>
        <div>
          number: {this.props.number}
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
        </div>
      </>
    );
  }
}

export default LifeCycleClass;
