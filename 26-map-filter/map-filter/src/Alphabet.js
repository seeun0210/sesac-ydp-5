import React, { useState } from 'react';

export default function Alphabet() {
  //   const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    console.log('inputAlpha>>', inputAlpha);
    //[퀴즈] input이 빈 값이라면 alphabet상태가 변경되지 않도록 하기
    if (inputAlpha.trim().length === 0) {
      //빈 스페이스 추가 안되게
      return;
    }
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlpha);
    setInputAlpha('');
  };

  const deleteAlpha = (targetId) => {
    // targetId: 삭제될 요소의 id
    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    // newAlpha은 삭제될 요소를 제외한 다른 alpha들을 담는 배열
    setAlphabet(newAlpha);
  };
  const handleKeyDown = (e) => {
    console.log(e);
    if (e.nativeEvent.isComposing) {
      return;
    }
    //아래의 한글 입력시 중복 이벤트 발생되는 문제를 해결하기 위한 코드
    // bug fix:IME 문제 해결
    if (e.code === 'Enter') {
      addAlpha();
    }
    // 이거 한글로 하면 마지막 글자 한번 더 입력됨....
    // 영어는 한 글자에 알파벳이 하나만 들어감
    // 그런데 한글은 최소 모음한개 자음 한개가 있어야 됨
    // if (e.keyCode === 13) {
    //   addAlpha();
    // }
    // 이건 멀쩡함
  };
  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        //[퀴즈]input에서 enter키 누르면 추가되도록!

        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })} */}
        {alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {/* deleteAlpha에 value.id값을 넘겨줌 */}
            {value.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
