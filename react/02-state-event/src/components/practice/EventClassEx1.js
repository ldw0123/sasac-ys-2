// 컴포넌트 Event Handling 실습

import { Component } from 'react';

class EventClassEx1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello World!',
    };
  }

  handleOnClick = (e) => {
    this.setState({ msg: 'Goodbye World!' });
  };

  render() {
    return (
      <>
        <hr />
        <h4>컴포넌트 event handling 실습 1</h4>
        {this.state.msg} <button onClick={this.handleOnClick}>잘 가</button>
      </>
    );
  }
}

export default EventClassEx1;
