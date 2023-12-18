import { combineReducers } from 'redux';
import bankReducer from './bankReducer';

const rootReducer = combineReducers({
  money: bankReducer,
});

export default rootReducer;
