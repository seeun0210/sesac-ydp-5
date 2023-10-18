const CHANGE = 'CHANGE';
export const change = () => ({ type: CHANGE });
const initialState = {
  isVisible: false,
};
const changeReducer = (state = initialState, action) => {
  if (action.type === CHANGE) {
    return !state.isVisible;
  }
  return state.isVisible;
};

export default changeReducer;
