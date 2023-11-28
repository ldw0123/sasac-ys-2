// 클래스형 컴포넌트 props

import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용 (props)</div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는{' '}
          {this.props.number}
        </div>
      </>
    );
  }

  // 클래스 내부에서 defaultProps 설정 가능
  static defaultProps = {
    name: '코딩온',
  };

  // 클래스 내부에서 propTypes 설정 가능
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    Number: PropTypes.number,
  };
}

ClassPropsEx.defaultProps = {
  name: '코딩온',
};

ClassPropsEx.propTypes = {
  title: PropTypes.string,
  // .isRequired : 필수값 지정
  content: PropTypes.string.isRequired, // 필수로 문자열 형태로 와야 한다
  Number: PropTypes.number,
};

export default ClassPropsEx;

// 클래스를 이용해서 객체를 만든다
// 객체를 만들면, 각 객체가 각기 다른 메모리를 할당
// 객체 내의 일반 속성은 객체별로 다른 공간을 차지
// 정적(static) 필드(변수, 메서드): 모든 객체가 같은 공간을 바라본다
// 정적으로 하나의 메모리 공간을 할당받는다
