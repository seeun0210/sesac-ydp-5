// 여러개의 reducer를 집할 시킬 것이다
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import bankReducer from './bankReducer';
// combineReducers: 여러 개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  money: bankReducer,
});
export default rootReducer;
