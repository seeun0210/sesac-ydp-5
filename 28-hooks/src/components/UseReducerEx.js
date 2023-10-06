import React, { useReducer } from 'react';

const initState = { value: 0 }; //초기 상태값
// preState:현재 상태값, action은 어떤 행동을 해애하는지 힌트를 주는것
const reducer = (preState, action) => {
  // action:{type:xxx}
  switch (action.type) {
    case 'INCREMENT':
      return { value: preState.value + 1 };
    case 'DECREMENT':
      return { value: preState.value - 1 };
    case 'RESET':
      return initState;
    default:
      return { value: preState.value };
  }
};
export default function UseReducerEx() {
  // reducer:state를 업데이트하는 함수
  // dispatch: 액션(state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
  // state:현재 상태
  const [state, dispatch] = useReducer(reducer, initState); //여기에서 reducer는 정의해줘야하는 함수
  const increment = () => dispatch({ type: 'INCREMENT' }); //type:어쩌고는 action객체에 담김
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <h1>useReducer ex</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
