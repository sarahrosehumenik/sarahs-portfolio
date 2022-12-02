import React from "react";
import "./ProjectNav.css";



export default function ProjectNav({setBigImage, setProjectData, projectInfo}) {

const djangoProject = () => {
  setProjectData(projectInfo[1])
  setBigImage(projectInfo[1].img[0])
    console.log("hi")

}

const menProject = () => {
  setProjectData(projectInfo[0])
  setBigImage(projectInfo[0].img[0])

}
const staticProject = () => {
    setProjectData(projectInfo[2])
    setBigImage(projectInfo[2].img[0])
  
  }
    return (
        <ul className="project-nav">
            <li onClick={() => menProject()} className="project-nav-button">Secrets Make Friends</li>
            <li onClick={() => djangoProject()} className="project-nav-button">Check Me Out</li>
            <li className="project-nav-button">TFW</li>
            <li onClick={() => staticProject()} className="project-nav-button">Forcefield</li>
        </ul>

    )
}