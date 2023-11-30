// ⭐ 클래스형 컴포넌트 Event Handling

import { Component } from 'react';

class EventClass extends Component {
  constructor(props) {
    super(props); // super() : this 객체를 사용하게 함
    this.state = {
      msg: 'hello',
    };

    // 함수 선언문을 이용하여 선언된 메서드의 경우, 생성자 내부에서 this객체를 binding해주어야 한다. (.bind(this)를 이용)
    // .bind(this) : bind() 안의 this가 this.handleOnclick을 가리키게 한다
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // 1. 함수 선언문을 사용하여 메서드 정의 (동적 바인딩)
  // 함수 내부에서  this 객체를 자체적으로 만들고 가지고 있음. this가 클래스의 this가 아니게 된다
  // 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정된다 (14번 줄)
  // 해결법 1) 생성자 내부에서 this를 원하는 것으로 바인딩
  // 해결법 2) 함수 표현식을 사용
  handleOnClick() {
    console.log('this: ', this);
    this.setState({ msg: 'bye' });
  }

  // 2. 함수 표현식을 사용하여 메서드 정의 (정적 바인딩)
  // 함수 표현식은 함수가 선언될 때(함수 선언 코드를 읽어들일 때) this를 결정짓는다. 클래스에 있는 this를 가져 온다
  // bind 필요 없음
  handleOnClickHello = (e) => {
    console.log('this: ', this);
    console.log('event: ', e);
    this.setState({ msg: 'hello' });
  };

  // render() 필수!
  render() {
    return (
      <>
        <hr />
        <h3>클래스형 컴포넌트 event handling 공부</h3>
        {this.state.msg}{' '}
        {/* {this.handleOnClick} : 함수를 실행시키지 않고 넘겨 받는다. 함수() 사용 X */}
        <button onClick={this.handleOnClick}>잘 가</button>{' '}
        <button onClick={this.handleOnClickHello}>안 녕</button>{' '}
        <button
          onClick={(e) => {
            // e : 리액트에서 만든 합성 event 객체. 합성 이벤트에 대한 모든 정보를 담고 있다
            // 그 중에 target이라는 것에 접근하면, 이벤트가 걸린 태그를 확인할 수 있다
            console.log(e); // 합성 event 객체 출력
            console.log(e.target); // event 객체의 target 출력
            console.log(e.type); // event 객체의 type 출력
          }}
        >
          event 객체
        </button>
      </>
    );
  }
}

export default EventClass;
