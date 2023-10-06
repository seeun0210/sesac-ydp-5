import React, { useMemo, useState } from 'react';

// useMemo
// -메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산을 최적화
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //임의의 큰 연산을 하는 함수
  //   버튼을 누를 때 실행되는데, input을 입력할 때에도 연산이 이루어짐(calc 함수가 호출됨)
  // 아때, useMemo 를 사용하면 렌더랑 과정에서 특정 값을 기억해서 바뀔 때만 연산되도록 최적화 할 수 있다!!

  // [useMemo 사용 전]
  // const calc = () => {
  //     console.log('열심히 계산 중...');
  //     // input값이 변한다고 해서 아래의 count와 calc는 변하지 않는데도 콘솔이 실행됨
  //     for (let i = 0; i < 10000000; i++) {}
  //     return count ** 2;
  //   };

  // [useMemo 사용]
  //   count의 값이 바뀔때에만 함수를 실행해 주세요
  // input 상태가 바뀌면 컴포넌트는 리렌더링 되지만, calc는 연산되지 않음
  const calc = useMemo(() => {
    console.log('열심히 계산 중...');
    // useMemo를 사용하면 input을 수정한다고 해서 콘솔이 찍히지 않음(count값이 변경될 떄에만 콘솔 찍힘)
    for (let i = 0; i < 10000000; i++) {}
    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo ex</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(() => count + 1)}>Plus</button>
      <p>count:{count}</p>
      {/* useMemo 사용 전 */}
      {/* <p>calc:{calc()}</p> */}

      {/* useMemo사용 */}
      <p>calc:{calc}</p>
      {/* calc에 괄호 붙이면 안됨!! 무한루프돌게 될지도.. */}
    </div>
  );
}
