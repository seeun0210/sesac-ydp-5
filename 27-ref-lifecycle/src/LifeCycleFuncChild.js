import React, { useEffect, useState } from 'react';

//자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');

  // //Mount 시점에 실행
  // useEffect(() => {
  //   console.log(
  //     '자식(노란색) 컴포넌트 mount될 때만 실행!(deps(두번째 인자 빈배열인경우))'
  //   );
  // }, []);

  // //Unmount 시점에 실행
  // useEffect(() => {
  //   return () => {
  //     console.log('자식(노란색)컴포넌트 없어질 때 실행');
  //   };
  // }, []);

  // //def가 없을 경우
  // useEffect(() => {
  //   console.log(
  //     '자식(노란색) 컴포넌트 mount,update될 때 실행!(deps(의존성 배열 없음)(두번째 인자 없는경우))'
  //   );
  // });

  // // input 상태가 업데이터 될 떄 실행
  // useEffect(() => {
  //   console.log('mount될때,input상태가 변경됨에 따라 컴포넌트 업데이트');
  // }, [input]);

  return (
    <div style={{ background: 'gold' }}>
      자식컴포넌트
      <div>현재 Number 값은 {number}입니다.</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* 여기에서 input에 어떤 값 넣으면 자식 컴포넌트가 업데이트 되는 거니까 의존성 배열 없는 경우가 실행됨 */}
    </div>
  );
}
