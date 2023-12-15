// ⭐ Ver.3
import { combineReducers } from 'redux'; // combineReducers() 함수: 여러 개의 reducer를 combine하게 하는 함수
import counterReducer from './counterReducer';
import isDataReducer from './isDataReducer';

// reducer combine하기
const rootReducer = combineReducers({
  // 객체. key: value
  counter: counterReducer,
  isData: isDataReducer,
});

export default rootReducer;
