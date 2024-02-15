import React, { useState } from 'react';
import styled from 'styled-components';


const StyledBurger = styled.div`

  height: 30px;
  width: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 20;

 
  div {
    width: 30px;
    height: 0.25rem;
    margin: 5px;
    background-color: rgb(200, 140, 240); //BURGER ICON COLOR
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ toggleNavigation, toggleNav }) => {


  return (
    <>
      <StyledBurger open={toggleNav} onClick={() => toggleNavigation()}>
        <div />
        <div />
        <div />
      </StyledBurger>

    </>
  )
}

export default Burger;