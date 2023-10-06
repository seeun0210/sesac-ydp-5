import React, { useState } from 'react';
// 함수의 인자에 이렇게 쓰면 initValue의 초기값으로 false가 설정됨
export default function useToggle(initValue = false) {
  // value:토글의 상태
  // setValue:토글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue);

  //토글 상태를 전환(스위칭!)
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}
