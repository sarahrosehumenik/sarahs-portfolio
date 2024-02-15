import React from "react";
import "./ProjectNav.css";

export default function ProjectNav({ setBigImage, setProjectData, projectInfo, fadeIn }) {

    const menProject = () => {
        fadeIn()
        setProjectData(projectInfo[0])
        setBigImage(projectInfo[0].img[0])
    }

    const djangoProject = () => {
        fadeIn()
        setProjectData(projectInfo[1])
        setBigImage(projectInfo[1].img[0])
        console.log("hi")
    }

    const staticProject = () => {
        fadeIn()
        setProjectData(projectInfo[2])
        setBigImage(projectInfo[2].img[0])
    }
    return (
        <ul className="project-nav">
            <li onClick={() => menProject()} className="project-nav-button">Secrets Make Friends</li>
            <li onClick={() => djangoProject()} className="project-nav-button">Check Me Out</li>
            <li onClick={() => staticProject()} className="project-nav-button">Forcefield</li>
        </ul>

    )
}