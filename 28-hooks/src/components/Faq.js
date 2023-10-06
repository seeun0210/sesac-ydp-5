import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  // useToggle함수가 [value,toggleValue]를 리턴하고 있으니까 그 값이 [isFaqOpen,setIsFaqOpen]여기에 저장됨

  return (
    <div>
      <h1>custom hook (useToggle) ex</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        Q. 리액트엣 커스텀 훅 만들 수 있음?
      </div>
      {isFaqOpen && <div>A. 네 그럼요 가능하쥬~~</div>}
      {/* isFaqOpen이 true일떄에만 div태그 안의 내용이 보이게 됨 */}
    </div>
  );
}
