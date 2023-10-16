import React, { useReducer, useState, useRef } from 'react';

const initState = {
  message: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        message: '로그인 성공!',
      };
    case 'INVALID_ID':
      return {
        ...state,
        message: '아이디를 틀렸습니다.',
      };
    case 'INVALID_PW':
      return {
        ...state,
        message: '비밀번호를 틀렸습니다.',
      };
    default:
      return state;
  }
};

export default function UseReducerLogin() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { message } = state;

  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });
  const idInputRef = useRef(null); // 아이디 인풋 창에 포커스를 주기 위한 useRef
  const pwInputRef = useRef(null); // 비밀번호 인풋 창에 포커스를 주기 위한 useRef
  const LOGIN = () => {
    const { id, pw } = inputs;
    if (id === 'banana' && pw === '1234') {
      dispatch({ type: 'LOGIN_SUCCESS' });
      setInputs({ id: '', pw: '' });
    } else if (id !== 'banana') {
      dispatch({ type: 'INVALID_ID' });
      idInputRef.current.focus();
    } else {
      dispatch({ type: 'INVALID_PW' });
      pwInputRef.current.focus();
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>UseReducerLogin</h1>
      <p>ID: banana, PW: 1234</p>
      <p>{message}</p>
      ID
      <input
        name="id"
        value={inputs.id}
        onChange={onChange}
        ref={idInputRef}
      ></input>
      <br></br>
      PW
      <input
        name="pw"
        value={inputs.pw}
        onChange={onChange}
        ref={pwInputRef}
      ></input>
      <button type="button" onClick={LOGIN}>
        LOGIN
      </button>
    </div>
  );
}
