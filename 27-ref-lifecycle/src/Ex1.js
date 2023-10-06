import React, { useState } from 'react';

export default function Ex1() {
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    search: '',
  });
  const [comments, setComments] = useState([
    {
      writer: '민수',
      title: '안녕',
    },
  ]);
  const [result, setResult] = useState([]);
  //   하나의 배열로 input값들을 관리할 수 있다.
  const { writer, title, search } = inputs;
  const [searchType, setSearchType] = useState('writer');
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    //e.target.value
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, //대괄호로 감싼 이유는 [name]이라는 값어쩌고 ...모르겠아
      //   name을 변수취급? 그래서 name에 writer나 title이 들어갈 수 있다
    });
  };
  const addComment = () => {
    const newComment = {
      writer: writer,
      title: title,
    }; //새로 추가되어야 할 정보
    setComments([...comments, newComment]);
    // 기존 것들 + 새로 추가된 것 하나
    setInputs({ ...inputs, writer: '', title: '' });
    // input 초기화
  };
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };
  const searchComment = () => {
    const searchResult = comments.filter((cmt) => {
      //cmt:{title:xxx,writer:xxx}
      if (!cmt[searchType].includes(search)) {
        //검색결과가 없다면: null
        return null;
      }
      return cmt;
    });
    setResult(searchResult); //검색결과 state변경
    setInputs({
      ...inputs,
      search: '',
    });
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={writer}
          onChange={onChange}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={search}
          onChange={onChange}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((cmt, idx) => (
            <tr key={idx + 1}>
              <td>{idx + 1}</td>
              <td>{cmt.title}</td>
              <td>{cmt.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <table border={1} style={{ margin: '30px auto', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((cmt, idx) => (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>검색결과가 없습니다.</div>
      )}
    </div>
  );
}
