import React, { useState, useCallback } from 'react';

// useCallback
// 매번 함수를 생성하지 않고, 함수를 기억해 두었다가 필요할 때마다 함수를 재사용
export default function UseCallbackEx() {
  const [text, setText] = useState('');

  //   [useCallback사용 전]
  // text 상태가 업데이트 되면 =컴포넌트 리랜더링=코드 다시 읽음
  // =onChangeText함수도 다시 생성(js func는 object type. 주소값이 변경)
  // =>불필요한 작업!! ->useCallback을 이용해서 함수를 기억하겠다!
  // const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  // [useCallback 사용]
  //   컴포넌트가 리랜더링 되어도, 의존성 배열에 있는 값이 바뀌지않는 한 기존 함수를 계속 사용
  // 의존성 배열로 빈 배열을 넣었으니까 , mount될 때의 함수를 계속해서 사용하겠다!
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>useCallback ex</h1>
      <input type="text" onChange={onChangeText} />
      <div>작성한 값:{text || '없음'} </div>
      {/* 빈 문자열일 경우 '없음" */}
      {/* 인풋에 어떤 값을 입력하면 상태가 변경되면서 컴포넌트를 다시 렌더링 함 ==> 즉, const[text,setText],onChangeText함수 계속 다시 렌더링된다는 말임 */}
      {/* 근데 함수 자체는 변화되는게 없으니까 이 함수자체를 기억해버리면 함수자체가 다시 렌더링 되지는 않겠지? */}
    </>
  );
}
