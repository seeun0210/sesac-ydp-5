import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState({});
  //   [useCallback 사용 전(useEffect 사용)]
  //   const getPost = async () => {
  //     console.log('data fetching...');
  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );
  //     // console.log(res.data);
  //     setPost(res.data);
  //   };

  //   useEffect 의존성 배열에 "함수"
  // 컴포넌트가 리랜더링=>함수 재생성(주소값 변경)->getPost 재호출 ->무한히 반복...
  //   useEffect(() => {
  //     getPost();
  //   }, [getPost]); //getPost 함수가 바뀔때 마다 getPost를 수행을 함
  //   getPost는 어떠한 상황에서 컴포넌트가 리렌더링될 때 useEffect안에 getPost가 있으니까 리렌더링될때 그러니까 업데이트 될 때 마다 함수가 실행된다
  // 함수의 주소값이 계속 바뀌면서 함수 안에 있는 콘솔이 무한히 찍히게 된다.
  // 이것을 막기 위해서 사용되는 것이 useCallback이다

  //[useCallback 사용]
  //useCallback 훅으로 메모이제이션-> 의존성 배열에 있는 postId가 변경되지 않는 한
  //   컴포넌트는 리랜더링 되지 않음
  // =>필요한 순가에만 api 요청을 날림!
  const getPost = useCallback(async () => {
    console.log('data fetching...');
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    // console.log(res.data);
    setPost(res.data);
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1>useCallback ex2</h1>
      {post.id ? post.title : '로딩중...'}
    </div>
  );
}
