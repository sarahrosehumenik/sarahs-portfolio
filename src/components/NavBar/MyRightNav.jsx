import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBt from './NavBt';
import "./Nav.css"
// import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/images/logo.svg';

const Ul = styled.nav`
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
    background-color: rgb(222, 255, 5);; // BG COLOR
    position:fixed;
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
           
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