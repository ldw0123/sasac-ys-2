// Redux 실습
import { combineReducers } from 'redux';
import bankReducerEx from './bankReducerEx';

const rootReducer = combineReducers({
  money: bankReducerEx,
});

export default rootReducer;
