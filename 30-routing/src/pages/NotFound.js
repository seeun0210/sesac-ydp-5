import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <Link to="/">홈으로 이동하기</Link>
      <br></br>
      <a href="http://localhost:3000">a태그로 홈이동</a>
      {/* a태그로 이동하면 처음부터 다 불러오게 됨 */}
    </div>
  );
}
