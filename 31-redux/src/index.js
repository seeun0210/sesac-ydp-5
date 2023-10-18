import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App4 from './App4';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'; //이건 크롬 확장프로그램!
import rootReducer from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

// store 정의: 전역상태를 관리하는 공간 (하나의 프로젝트에 하나만!!)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App4 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
