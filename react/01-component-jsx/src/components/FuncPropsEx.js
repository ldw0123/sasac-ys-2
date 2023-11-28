// 함수형 컴포넌트 props

// 방식 1. props 매개변수
// function FuncPropsEx(props) {
//   // 다음과 같은 객체의 형태로 props가 넘어 온다
//   // props = {
//   //   title: "SeSAC",
//   //   content: "hello world",
//   // }
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (props)</div>
//       <div>
//         제목은 {props.title}, 내용은{props.content}
//       </div>
//     </>
//   );
// }

// 방식 2. 컴포넌트 내에서 props 매개변수 구조분해
// function FuncPropsEx(props) {
//   const { title, content } = props;

//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (props)</div>
//       <div>
//         제목은 {title}, 내용은{content}
//       </div>
//     </>
//   );
// }

// 방식 3. 매개변수로 props를 받아올 때부터 구조분해
// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용 (props)</div>
//       <div>
//         제목은 {title}, 내용은{content}
//       </div>
//     </>
//   );
// }

// 방식 4. PropTypes 이용해서 어떤 props가 넘어올지 명시
// react가 JS 기반이다보니 변수의 타입이 없음. 너무 유연하기 때문에 코드가 복잡해 질수록 오류를 찾기 어려워짐. 따라서 타입을 명시하는 방법이 필요하다
import PropTypes from 'prop-types';

function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트를 이용 (props)</div>
      <div>
        제목은 {title}, 내용은 {content}, 숫자는 {number}
      </div>
    </>
  );
}

// 내용 명시 (default값을 설정하여 누락될 경우 내용을 추가해줌)
FuncPropsEx.defaultProps = {
  title: '홍길동',
};

// 타입 명시
FuncPropsEx.propTypes = {
  title: PropTypes.string,
  // .isRequired : 필수값 지정
  content: PropTypes.string.isRequired, // 필수로 문자열 형태로 와야 한다
  Number: PropTypes.number,
};

export default FuncPropsEx;
