import React, { useEffect, useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

//부모컴포넌트
export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ background: 'green' }}>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <LifeCycleFuncChild number={number} />}
      {/* visible이 true일떄만 자식 컴포넌트를 보여주는 코드를 단축평가로 구현 */}
    </div>
  );
}
