import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          {/* 이때, APP에서 라우팅 했던 경로와 똑같이 해 주어야 한다!! 안그럼 notfound로 감.. */}
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  );
}
