// ⭐ Ver.3
// true or false를 저장하는 파일
const initialValue = false;

const isDataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'CHANGE': // 액션의 타입이 'CHANGE'일 경우, 현재 상태(initialValue)를 반전시킨다
      return !state;
    default:
      return state;
  }
};

export default isDataReducer;
