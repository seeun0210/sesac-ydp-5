const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';
const initialState = {
  money: 0,
};
export const deposit = (num) => ({ type: DEPOSIT, payload: num });
export const withdraw = (num) => ({ type: WITHDRAW, payload: num });

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { money: state.money + parseInt(action.payload) };
    case WITHDRAW:
      return { money: state.money - parseInt(action.payload) };
    default:
      return state;
  }
};
export default bankReducer;
