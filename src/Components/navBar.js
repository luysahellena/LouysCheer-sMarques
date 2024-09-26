import React from 'react';

const NavBar = () => {
  return (
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a>
        <ul className="submenu">
          <li className="item-list-container">1</li>
          <li className="item-list-container">2</li>
          <li className="item-list-container">3</li>
          <li className="item-list-container">4</li>
          <li className="item-list-container">5</li>
          <li className="item-list-container">6</li>
        </ul>
      </li>
    </ul>
  );
};

export default NavBar;