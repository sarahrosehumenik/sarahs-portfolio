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


    return (
<div className="skills-container">
    <div className="display"><h1 className="skill-text">{currentSkill}</h1></div>
    <div className="skills-list">
        <p onClick={javaScript} className="icon-container"><i id="i" class="fa-brands fa-js"></i></p>
        <p onClick={html} className="icon-container"><i id="i" class="fa-brands fa-html5"></i></p>
        <p onClick={css} className="icon-container"><i id="i" class="fa-brands fa-css3-alt"></i></p>
        <p className="icon-container">d</p>
        <p className="icon-container">e</p>
        <p className="icon-container">f</p>
        <p className="icon-container">g</p>
        <p className="icon-container">h</p>
        <p className="icon-container">i</p>
        <p className="icon-container">j</p>
        <p className="icon-container">k</p>
        <p className="icon-container">l</p>
        <p className="icon-container">m</p>
        <p className="icon-container">n</p>
        <p className="icon-container">o</p>
      </div>
</div>
    )}