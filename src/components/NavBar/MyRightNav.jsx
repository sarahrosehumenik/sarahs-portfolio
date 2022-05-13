import React from 'react';
import styled from 'styled-components';
import NavBt from './NavBt';
// import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/images/logo.svg';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  font-family:'BIZ UDPGothic', sans-serif;
  
  
  flex-flow: row nowrap;
  .side-menu{
    margin-top: 6rem;
    visibility: hidden;
    position: absolute;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black; // BG COLOR
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 65vw;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    .side-menu{
      visibility: visible;
      position: relative;
    }
  }
    
`;

const navContainer = {
  /* backgroundColor: "green", */
  marginTop: '1rem',
  padding: '.5rem',
  color: '#DFDF01',
  
  margin: 'auto'

}

// const logoStyle = {
//   width: "6rem",
//   height: "6rem",
//   cursor: "pointer",
//   marginTop: ".3rem",
// }

const barStyle = {
  display:'flex',
  width: '100vw',
 
}

const RightNav = ({ open }) => {
  return (

    <div style={barStyle}>

      {/* <Link to='/'> */}
        {/* <Logo style={logoStyle}/>       */}
      {/* </Link> */}

      <div style={navContainer}>
        <Ul open={open}>
        <NavBt path="header" name="☺︎ "/> 
            <NavBt path="about" name="About"/> 
            <NavBt path="S2" name="Skills"/> 
            <NavBt path="projects" name="Projects"/> 

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