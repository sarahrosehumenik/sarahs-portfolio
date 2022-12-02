import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './MyRightNav';

const StyledBurger = styled.div`
  width: 2vh;
  height: 4vh;
  position: absolute;
  top: 4vh;
  right: 5.5vh;
 
  display: none;
  @media (max-width: 632px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 30;
  }
  div {
    width: 5vh;
    height: 0.25rem;
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

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger;