import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App2 from './App2';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'; //이건 크롬 확장프로그램!
const root = ReactDOM.createRoot(document.getElementById('root'));

// state초기값 정의
const initialState = {
  number: 50,
};

// 첫번째 객체:reducer
// reducer 정의: 변화를 일으키는 함수
// state의 디폴트값으로 initialState를 줌
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + 1 };
    case 'MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// store 정의: 전역상태를 관리하는 공간 (하나의 프로젝트에 하나만!!)
const store = configureStore({ reducer: reducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
