import { useState } from 'react';
const SayFunction = () => {
  console.log(useState('welcome!'));
  const [message, setMessage] = useState('welcome!');
  //  welcome! :상태 초기값, (숫자, 문자, 배열 등 값의 형태 자유로움)
  // message: 메세지 상태
  // setMessage() : message state 값을 바꾸는 함수
  const onClickEnter = () => {
    setMessage('안녕하세요!');
  };
  const onClickLeave = () => {
    setMessage('안녕히가세요~');
  };

  return (
    <div>
      {/* 
            -HTML: onclick="onClickEvent()"-> 문자열 형식으로 호출문 등록
            -JS: addEventListener('click',onClickEvent)->괄호를 없애 함수를 바로 실행하지 않고, 클릭 발생했을 때 함수 호출되도록
            -REACT:onClick={onClickEvent}->괄호를 없애 함수를 바로 실행하지 않고 클릭이 발생했을 떄 함수가 호출되도록
        */}
      <button onClick={onClickEnter}>입장</button>
      {/* 만약 함수가 호출되도록 하면 onClickEnter()이렇게 적으면 무한호출됨... */}
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};
export default SayFunction;
