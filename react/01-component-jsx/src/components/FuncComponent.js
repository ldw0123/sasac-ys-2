// 함수형 컴포넌트

// 방식 1
// const FuncComponent = () => {
//   return <div>Function Component입니다</div>;
// };

// 이미지 import
import image from './matcha.jpg';

// 방식 2
function FuncComponent() {
  const text = 'hello?';
  const name = 'richard';

  // 복잡한 if문을 위해 함수를 생성
  const ifRenderTest = () => {
    if (name === 'lily') {
      return <div>안녕하세요!</div>;
    } else if (name === 'richard') {
      return '안녕하세요...';
    } else {
      return '누구세요?';
    }
  };

  // css 속성 (객체 형태)
  const style = { fontSize: '25px', color: 'darkblue' };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return 할 것 */}
      <div>함수형 컴포넌트입니다 1</div>
      <div>함수형 컴포넌트입니다 2</div>

      {/* 2. html 내에서 js 문법 사용 가능! (변수) */}
      <h3>리액트 {text}</h3>

      {/* 2. html 내에서 js 문법 사용 가능! (간단한 삼항 연산자를 조건에 따른 렌더링 ) */}
      <h4>{name === 'star' ? '안녕하세요!' : '누구세요?'}</h4>

      {/* 2-1. 복잡한 조건을 이용하고 싶다면 위에서 함수를 만들어서 호출  */}
      <h4>{ifRenderTest()}</h4>

      {/* 2-2. 조건에 따른 렌더링 ( && : 앞이 참일 경우에만 뒤를 읽어들인다 ) */}
      <h5>{name === 'richard' && '안녕하세요~!'}</h5>

      {/* 3. inline style 적용 방법 : style 속성값으로 객체(key : 'value')를 전달 */}
      <div style={{ fontSize: '25px', color: 'crimson' }}>Hello👋</div>
      <div style={style}>Hello👋</div>

      {/* 4. class와 onclick */}
      {/* <div class="" onclick="함수();">원래 html에서 하던 방식</div> */}
      <div className="test-css">
        JSX에서 css 사용하기 (속성 이름은 className)
      </div>

      {/* html에서는 함수를 "호출", jsx에는 함수를 "선언" */}
      <button
        onClick={() => {
          // 함수();
          console.log('onClick');
        }}
      >
        버튼
      </button>

      {/* 5. 종료 태그 필수 */}
      <br />
      {/* '/' 경로가 public 폴더 속이다 */}
      <img src="/logo192.png" />

      {/* src 내부의 이미지를 사용할 경우 -> 위에서 이미지를 import 해오기 */}
      <img src={image} style={{ width: '200px' }} />
    </>
  );
}

export default FuncComponent;
