import React, { useEffect } from 'react';

//custom hooks
export default function useTitle(title) {
  // 여기에서 title은 props가 아님! 그냥 매개변수임

  useEffect(() => {
    const prevTitle = document.title; //현제 웹 브라우저의 title을 prevTitle에 저장
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
}
