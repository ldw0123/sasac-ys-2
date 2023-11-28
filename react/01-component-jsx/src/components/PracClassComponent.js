// 클래스형 컴포넌트 props 실습
import { Component } from 'react'; // react 라이브러리에서 Component 불러오기
import PropTypes from 'prop-types';

// Component 클래스 상속받음
class PracClassComponent extends Component {
  render() {
    return (
      <>
        <div>{this.props.text}</div>
        <button
          onClick={() => {
            console.log('콘솔 띄우기 성공!');
          }}
        >
          버튼
        </button>
      </>
    );
  }

  // 클래스 내부에서 defaultProps 설정
  static defaultProps = {
    name: '이건 기본 text props입니다.',
  };

  // 클래스 내부에서 propTypes 설정
  static propTypes = {
    text: PropTypes.string.isRequired, // text에 문자를 필수 prop로 지정
  };
}

export default PracClassComponent;
