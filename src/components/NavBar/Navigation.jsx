import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import "./Nav.css"


export default function Navigation() {

  const [toggleNav, setToggleNav] = useState(false)
  function toggleNavigaion() {
    setToggleNav(!toggleNav)
  }

  return (
    <>
      <div className="nav-container">
        <div className="nav-link-wrapper">
          <Link className="navi-link" to="/">Home</Link>
          <Link className="navi-link" to="/skills">Experience</Link>
          <Link className="navi-link" to="/projects">Projects</Link>
        </div>
        <img className="headshot" src="https://i.imgur.com/GgWvFWR.jpg"></img>
      </div>
      <>
        <div className="burger-container">
          <Burger toggleNav={toggleNav} toggleNavigation={toggleNavigaion} />
        </div>
        {toggleNav ?
          <div className="side-nav-container">
            <Link onClick={() => toggleNavigaion()} className="navi-link-side" to="/">Home</Link>
            <Link onClick={() => toggleNavigaion()} className="navi-link-side" to="/skills">Experience</Link>
            <Link onClick={() => toggleNavigaion()} className="navi-link-side" to="/projects">Projects</Link>
          </div>
          : null}
      </>
    </>
  )
}

