import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
 
  background-color: rgba(255, 255, 255, 0.016); 
  padding: 0 20px;
  display: flex;

  
`

const NavBar = () => {
  return (
    <div style={{position: 'relative'}}>
      
      <Nav>
        <Burger />
      </Nav>

    </div>
  )
}

export default NavBar;