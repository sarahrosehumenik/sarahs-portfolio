import React from "react";
import "./ProjectNav.css";

export default function ProjectNav({setBigImage, setProjectData, projectInfo}) {

const menProject = () => {
  setProjectData(projectInfo[0])
  setBigImage(projectInfo[0].img[0])
}

const djangoProject = () => {
  setProjectData(projectInfo[1])
  setBigImage(projectInfo[1].img[0])
    console.log("hi")
}

const reactProject = () => {
   setProjectData(projectInfo[2])
    setBigImage(projectInfo[2].img[0])
}

const staticProject = () => {
    setProjectData(projectInfo[3])
    setBigImage(projectInfo[3].img[0])
}
    return (
        <ul className="project-nav">
            <li onClick={() => menProject()} className="project-nav-button">Secrets Make Friends</li>
            <li onClick={() => djangoProject()} className="project-nav-button">Check Me Out</li>
            <li onClick={()=> reactProject()} className="project-nav-button">TFW</li>
            <li onClick={() => staticProject()} className="project-nav-button">Forcefield</li>
        </ul>

    )
}