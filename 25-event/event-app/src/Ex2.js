import { useState } from 'react';

const ChangeStrColor = () => {
  const [str, setStr] = useState('검정색 글씨');
  const [color, setColor] = useState({ color: 'black' });
  const HandlerStrColorRed = () => {
    setStr('빨간색 글씨');
    setColor({ color: 'red' });
  };
  const HandlerStrColorBlue = () => {
    setStr('파란색 글씨');
    setColor({ color: 'blue' });
  };
  return (
    <div>
      <h1 style={color}>{str}</h1>
      <button onClick={HandlerStrColorRed}>빨간색</button>
      <button onClick={HandlerStrColorBlue}>파란색</button>
    </div>
  );
};

export default ChangeStrColor;
