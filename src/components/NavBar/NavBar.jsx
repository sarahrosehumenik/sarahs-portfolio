import React from 'react';
import Burger from './Burger';

const NavBar = () => {
  return (
    <div style={{ position: 'relative' }}>
      <nav>
        <Burger />
      </nav>
    </div>
  )
}

export default NavBar;