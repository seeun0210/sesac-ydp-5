import { useState } from 'react';

const ChangeStr = () => {
  const [str, setStr] = useState('안녕하세요');
  const [btnStr, setBtnStr] = useState('사라져라');

  const handleStr = () => {
    if (btnStr === '사라져라') {
      setBtnStr('나타나라');
      setStr('');
    } else {
      setBtnStr('사라져라');
      setStr('안녕하세요');
    }
  };
  return (
    <div>
      <button onClick={handleStr}>{btnStr}</button>
      <h1>{str}</h1>
    </div>
  );
};
export default ChangeStr;
