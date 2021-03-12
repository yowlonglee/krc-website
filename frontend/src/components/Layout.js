import React from 'react';
import Nav from './Nav';

export default function Layout({children}) {
  return (
    <>
      <h2>KRC</h2>
      <Nav />
      {children}
    </>
  );
}