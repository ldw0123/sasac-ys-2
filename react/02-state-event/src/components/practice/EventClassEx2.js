// 클래스형 컴포넌트 Event Handling 실습2

import { Component } from 'react';

class EventClassEx2 extends Component {
  state = {
    text: '검정색 글씨',
    color: 'black',
  };

  handleOnClick1 = () => {
    this.setState({ text: '빨간색 글씨', color: 'red' });
  };

  handleOnClick2 = () => {
    this.setState({ text: '파란색 글씨', color: 'blue' });
  };

  render() {
    return (
      <>
        <h4>컴포넌트 event handling 실습 2</h4>
        <h2 style={{ color: this.state.color }}>{this.state.text}</h2>
        <button onClick={this.handleOnClick1}>빨간색</button>{' '}
        <button onClick={this.handleOnClick2}>파란색</button>
        <br />
        <br />
      </>
    );
  }
}

export default EventClassEx2;
