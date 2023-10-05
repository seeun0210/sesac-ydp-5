import React, { useState, useRef } from 'react';

export default function Ex2() {
  const refName = useRef();
  const refTitle = useRef();

  const handleFocusRefName = () => {
    refName.current.focus();
  };
  const handleFocusRefTitle = () => {
    refTitle.current.focus();
  };
  const [user, setUser] = useState([
    {
      id: 1,
      name: '김세은',
      title: '안녕하세요',
    },
  ]);
  const [select, setSelect] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장할 상태 변수 추가
  const write = () => {
    if (inputName.trim().length === 0) {
      //빈 스페이스 추가 안되게
      handleFocusRefName();
      return;
    } else if (inputTitle.trim().length === 0) {
      handleFocusRefTitle();
      return;
    } else {
      const newUser = user.concat({
        id: user.length + 1,
        name: inputName,
        title: inputTitle,
      });
      setUser(newUser);
      setInputName('');
      setInputTitle('');
    }
  };
  const deleteUser = (targetId) => {
    const newUser = user.filter((user) => user.id !== targetId);
    setUser(newUser);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      write();
    }
  };
  const searchHandler = (select, searchValue) => {
    console.log(select, searchValue);
    console.log(user[select]);
    const newResults = user.filter((user) => user[select] === searchValue);
    setSearchResults(newResults);
  };
  const allUserHandler = () => {
    setSearchResults([]); // 검색 결과 초기화
  };

  return (
    <>
      <fieldset>
        <label for="writer">
          작성자:
          <input
            type="text"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            onKeyDown={(e) => handleKeyDown(e)}
            ref={refName}
          ></input>
        </label>
        <label for="title">
          제목:
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
            onKeyDown={(e) => handleKeyDown(e)}
            ref={refTitle}
          ></input>
        </label>
        <button onClick={write}>작성</button>
      </fieldset>
      <div>
        <select
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="name">작성자</option>
          <option value="title">제목</option>
          <option value="id">번호</option>
        </select>
        <input
          placeholder="검색어"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button onClick={() => searchHandler(select, searchValue)}>검색</button>
        <button onClick={allUserHandler}>전체</button>
      </div>

      <div>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
          </thead>

          {/* 검색 결과가 있을 때만 보여주도록 조건부 렌더링 */}
          {searchResults.length > 0
            ? searchResults.map((value) => (
                <tr onDoubleClick={() => deleteUser(value.id)} key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.name}</td>
                </tr>
              ))
            : // 검색 결과가 없을 때는 전체 사용자 목록 보여주도록 조건부 렌더링
              user.map((value) => (
                <tr onDoubleClick={() => deleteUser(value.id)} key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.name}</td>
                </tr>
              ))}
        </table>
      </div>
    </>
  );
}
