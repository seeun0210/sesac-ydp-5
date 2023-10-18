// state 초기값 정의
const initialState = {
  number: 50,
};

// 첫번째 객체:reducer
// reducer 정의: 변화를 일으키는 함수
// state의 디폴트값으로 initialState를 줌
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + 1 };
    case 'MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
