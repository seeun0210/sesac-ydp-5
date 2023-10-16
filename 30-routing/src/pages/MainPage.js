import React from "react";
import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams({ mode: null });
  console.log(searchParams);
  console.log(searchParams.get("mode")); //쿼리 스트링에 있는 key에 대한 value를 출력
  //   그래서 다크모드를 누르면 "Dark", 아무것도 없으면 null 출력함
  return (
    <div className={["Main", searchParams.get("mode")].join(" ")}>
      <h1>MainPage</h1>
      <button
        onClick={() =>
          searchParams.get("mode") === null
            ? setSearchParams({ mode: "Dark" })
            : setSearchParams({ mode: null })
        }
      >
        Dark Mode
      </button>
      {/* 이 버튼을 누르면 url경로가 "http://localhost:3000/?mode=Dark" */}
    </div>
  );
}
