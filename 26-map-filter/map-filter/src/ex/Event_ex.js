import React, { useState } from 'react';

export default function Event() {
  //정보를 받아서 저장할 배열
  const [userInfo, setUserInfo] = useState([
    { id: 1, name: '홍길동', email: 'hong@gmail.com' },
  ]);
  //input 창에 저장하는거
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const register = () => {
    console.log('inputInfo>>', inputName, inputEmail);
    const newInfo = userInfo.concat({
      id: userInfo.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setUserInfo(newInfo);
    setInputName('');
    setInputEmail('');
  };
  const deleteUserInfo = (targetId) => {
    const newInfo = userInfo.filter((info) => info.id !== targetId);
    setUserInfo(newInfo);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log('inputName', inputName);
      console.log('inputEmail', inputEmail);
      if (inputName.trim() === '') {
        alert('이름을 입력하세요');
      } else if (inputEmail.trim() === '') {
        alert('이메일을 입력하세요');
      } else {
        register();
      }
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <input
        type="email"
        placeholder="email"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={register}>등록</button>
      <ul>
        {userInfo.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteUserInfo(value.id)}>
            {value.name}:{value.email}
          </li>
        ))}
      </ul>
    </>
  );
}
