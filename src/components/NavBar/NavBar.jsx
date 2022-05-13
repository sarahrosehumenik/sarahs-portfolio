import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  z-index: 30;
  background-color:#1d877e; 
  padding: 0 20px;
  display: flex;
  
`

const NavBar = () => {
  return (
    <div style={{position: 'fixed'}}>
      
      <Nav>
        <Burger />
      </Nav>

    </div>
  )
}

export default NavBar;