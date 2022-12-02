import React from "react";
import "./ProjectOne.css"
import { useState } from "react";
import ProjectNav from "./ProjectNav.jsx";




export default function ProjectOne({ projectData, setProjectData, projectInfo }) {

const [bigImage, setBigImage] = useState(projectData.img[0])

const images = projectData.img.map((el) => {
    return (
        <img 
        onClick={()=> handleImg(el)}
        className="images" src={el} />
    )
       
})


const handleImg = (image) => {
    setBigImage(image)
}




    return (
        <>
        <ProjectNav setProjectData={setProjectData} setBigImage={setBigImage} projectInfo={projectInfo}/>
        <div className="project-container">
           
           
            <div className="all-images">
                <img className="big-image" src={bigImage} />

                <div className="small-images">
                    {images}
                </div>
            </div>
            <div className="project-information">
                <p className="tech-stack">{projectData.tech}</p>
                <h1 className="project-title">{projectData.title}</h1>
                <p className="description">{projectData.description}
                </p>
                <div className="tech-icons">
                    <i class={projectData.icons[0]}></i>
                    <i class={projectData.icons[1]}></i>
                    <p className="solo-icon">{projectData.icons[2]}</p>
                    <p className="solo-icon">{projectData.icons[3]}</p>
                </div>
                <div className="project-links">
                    <a className="links" target="_blank" href={projectData.links[0]}>Website</a><a className="links" target="_blank" href={projectData.links[1]}>GitHub</a>
   
                </div>
            </div>
        </div>
        </>

    )
}