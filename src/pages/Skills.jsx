import './Skills.css'
import { useState } from "react";
export default function Skills() {

const [currentSkill, setCurrentSkill] = useState("My Skills")

const javaScript = () => {
    setCurrentSkill('JavaScript')
}
const html = () => {
    setCurrentSkill('HTML')
}

const css = () => {
    setCurrentSkill('CSS')
}
const python = () => {
    setCurrentSkill("Python")
}

const django = () => {
    setCurrentSkill("Django")
}
const aws = () => {
    setCurrentSkill("Amazon Web Service")
}
const stripe = () => {
    setCurrentSkill("Stripe API")
}
const node = () => {
    setCurrentSkill("Node.js")
}

const databases = () => {
    setCurrentSkill("MongoDB & PosgreSQL")
}

const react = () => {
    setCurrentSkill("React")
}
const github = () => {
    setCurrentSkill("GitHub")
}

const google = () => {
    setCurrentSkill("Google Oauth")
}

const mongoose = () => {
    setCurrentSkill("Mongoose")
}
const vsCode = () => {
    setCurrentSkill("Visual Studio Code")
}
const postman = () => {
    setCurrentSkill("Postman")
}
    return (
<div className="skills-container">
    <div className="skills-description">
    <img id="skills-img" src="https://i.imgur.com/arJcD1v.jpg"/>
    <h1 className="skills-title">The skills to get the job done</h1>
    <p className="about-skills">This is a bunch of text as a place filler for what i will eventually say.i have lots of skills so check them out cause yeah thats whats up.</p>
    </div>
    <div className="button-board">
    <div className="display"><h1 className="skill-text">{currentSkill}</h1></div>
    <div className="skills-list">
        <p onClick={javaScript} className="icon-container"><i id="i" class="fa-brands fa-js"></i></p>
        <p onClick={html} className="icon-container"><i id="i" class="fa-brands fa-html5"></i></p>
        <p onClick={css} className="icon-container"><i id="i" class="fa-brands fa-css3-alt"></i></p>
        <p onClick={python} className="icon-container"><i id="i" class="fa-brands fa-python"></i></p>
        <p onClick={django}  className="icon-container">dj</p>
        <p onClick={aws} className="icon-container"><i id="i" class="fa-brands fa-aws"></i></p>
        <p onClick={stripe} className="icon-container"><i id="i" class="fa-brands fa-stripe"></i></p>
        <p onClick={node} className="icon-container"><i id="i" class="fa-brands fa-node-js"></i></p>
        <p onClick={databases} className="icon-container">DB</p>
        <p onClick={react}className="icon-container"><i id="i" class="fa-brands fa-react"></i></p>
        <p onClick={github} className="icon-container"><i id="i" class="fa-brands fa-github"></i></p>
        <p onClick={mongoose} className="icon-container">MG</p>
        <p onClick={google} className="icon-container"><i id="i" class="fa-brands fa-google"></i></p>
        <p onClick={vsCode} className="icon-container">VS</p>
        <p onClick={postman} className="icon-container"><i id="i" class="fa-solid fa-person"></i></p>
      </div>
      <div className="extra-space"></div>
      </div>
</div>
    )}