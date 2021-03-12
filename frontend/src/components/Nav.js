import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">首頁</Link>
        <Link to="/about/">教練介紹</Link>
        <Link to="/services/">課程服務</Link>
        <Link to="/videos/">影音內容</Link>
        <Link to="/blog/">文章內容</Link>
        <Link to="/contact/">聯絡方式</Link>
      </ul>
    </nav>
  );
}
