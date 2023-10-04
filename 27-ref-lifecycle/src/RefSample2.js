import React, { useRef, useState } from 'react';

export default function RefSample2() {
  const id = useRef(7);
  const [number, setNumber] = useState(10);

  const plusIdRef = () => {
    id.current += 1;
    console.log(id.current);
    // 여기에서 console.log로는 증가하고 있지만 UI로 리렌더링 되지 않아서 그려지지 않음
  };
  const plusNumState = () => {
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시 id 값을 1씩 증가</p>
      <h2>{id.current}</h2>
      {/* ref를 사용할 때에는 current라는 키 값으로 접근해야함(왜그런지는 모름 리액트 만드는 사람들이 그렇게 함) */}
      <button onClick={plusIdRef}>Plus</button>

      <p>비교. state변경시 ref와 다르게 리렌더링 되는 것 확인</p>
      <h2>{number}</h2>
      <button onClick={plusNumState}>Plus</button>
    </div>
  );
}
