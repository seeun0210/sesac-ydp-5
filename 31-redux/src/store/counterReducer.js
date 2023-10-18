// 변수 상수화
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

//plus(), minus() 함수 만들어서
// 나중에 컴포넌트에서 액션을 쉽게 발생시키도록
export const plus = () => ({ type: PLUS }); //return {type:'counter/PLUS'}
export const minus = () => ({ type: MINUS }); //return {type:'counter/MINUS'}

// state 초기값 정의
const initialState = {
  number: 50,
};

// 첫번째 객체:reducer
// reducer 정의: 변화를 일으키는 함수
// state의 디폴트값으로 initialState를 줌
const counterReducer = (state = initialState, action) => {
  // ac
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
