import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Ul = styled.nav`
  list-style: none;
  display: flex;
  font-family:'BIZ UDPGothic', sans-serif;
  flex-flow: row nowrap;
  
  .side-menu {
    margin-top: 6rem;
    visibility: hidden;
    position: absolute;
  }
 
  @media (max-width: 632px) {
    flex-flow: column nowrap;
    background-color: rgb(222, 255, 5);; // BG COLOR
    position:fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    z-index:2;
    right: 0;
    height: 100vh;
    width: 65vw;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    .side-menu {
      visibility: visible;
      position: relative;
    }
  }`

const navContainer = {
  marginTop: '1rem',
  padding: '.5rem',
  color: '#DFDF01',
}

const barStyle = {
  display: 'flex',
  width: '100%',
}

const RightNav = ({ open, setOpen }) => {
  const closeNav = () => {
    setOpen(false)
  }

  return (

    <div style={barStyle}>
       <div style={navContainer}>
        <Ul open={open}>
          <Link onClick={closeNav} className="navi-link" to="/">Home</Link>
          <Link onClick={closeNav} className="navi-link" to="/skills">Skills</Link>
          <Link onClick={closeNav} className="navi-link" to="/projects">Projects</Link>
          <img className="headshot" src="https://i.imgur.com/GgWvFWR.jpg"></img>
            <div className="side-menu">
              <div className="flex-container-column ">
              </div>
            </div>
        </Ul>
       </div>
     </div>
  )
}

export default RightNav;