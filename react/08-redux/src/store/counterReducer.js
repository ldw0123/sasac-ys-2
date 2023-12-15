// ⭐ Ver.3
// Reducer를 분리해서 구조화한 파일

// action의 type을 상수화
// counter: store/index.js의 rootReducer 키값. isDataReducer.js 에서 INCREMENT가 발생되었을 때 어떤 파일에서의 INCREMENT인지 모르니까 다른 파일의 것과 겹치지 말라고 어느 파일의 INCREMENT인지 앞에 명시한다
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 발생할 수 있는 action을 반환하는 함수
// 함수를 만든 이유: action.type의 이름이 바뀌면, action을 발생시키는 모든 곳(dispatch)에서 action.type을 다 변경해 주어야 하기 때문에
export const increase = () => ({ type: INCREMENT }); // 객체를 반환
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 }; // state의 number 초기값 설정

// state 객체: {number: value}
const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    // case 조건 두 개를 나열 가능! (조건을 둘 다 만족하면)
    case 'INCREMENT': // INCREMENT 상수 선언 전 Ver.3
    case INCREMENT: // INCREMENT상수 선언 후 Ver.3-1
      return { number: state.number + 1 };
    case 'DECREMENT':
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state; // 원래 state 그대로 반환
  }
};

export default counterReducer;
