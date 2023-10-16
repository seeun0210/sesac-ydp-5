import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <span>Header</span>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/photo">Photo</Link>
        </li>
      </ul>
    </div>
  );
}
