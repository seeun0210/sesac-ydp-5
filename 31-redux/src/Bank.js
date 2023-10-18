import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Bank() {
  const [num, setNum] = useState(0);
  const money = useSelector((state) => state.money.money);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux 실습</h1>
      <h2>코딩온 은행</h2>
      <h3>잔액:{money}</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => dispatch({ type: 'DEPOSIT', payload: num })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: 'WITHDRAW', payload: num })}>
        출금
      </button>
    </div>
  );
}
