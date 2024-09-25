import React from 'react';
import CardWidget from './CardWidget';

const NavBar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
        <li><CardWidget /></li>
      </ul>
    </nav>
  );
};

export default NavBar;