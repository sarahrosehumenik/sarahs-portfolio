import './Projects.css'
import { useState, useEffect } from 'react';
import ProjectOne from "../components/ProjectOne.js";
import secrets1 from "../Images/secrets1.png"
import secrets2 from "../Images/secrets2.png"
import secrets3 from "../Images/secrets3.png"
import check1 from "../Images/check1.png"
import check2 from "../Images/check2.png"
import check3 from "../Images/check3.png"
import force1 from "../Images/forcefields1.png"
import force2 from "../Images/forcefields2.png"
import force3 from "../Images/forcefields3.png"


export default function Projects() {

        const projectInfo = [
                {
                        img: [secrets1, secrets2, secrets3],
                        tech: "MERN Stack",
                        title: "Secrets Make Friends",
                        description: "Welcome to a space designed for sharing tea and building connections. This solo project, created with a MERN stack, features a React front end connected to a MongoDB/Mongoose backend via an Express server. Utilizing the MERN architecture, the application allows for Full CRUD operations using MongoDB.The integration of the Tenor API allows for the posting as many GIFs as one desires. Thats why we are here, right?",
                        icons: ["fa-brands fa-google", "fa-brands fa-react", "MongoDB", "Mongoose"],
                        links: ["https://secrets-project6969.herokuapp.com/", "https://github.com/sarahrosehumenik/secretsproject"]
                },
                {
                        img: [check1, check2, check3],
                        tech: "Django",
                        title: "Check Me Out",
                        description: "Don't get paid in clout, Check Me Out – a platform where you can showcase and sell your products while connecting with the community. This app is built with Django, employing server-side rendering for a smooth user experience. It integrates the Stripe API for secure payments and utilizes AWS for photo functionality. Developed collaboratively by a team of three contributors, Check Me Out keeps it simple and effective.A practical e- commerce solution exploring data relations within a store and social media space.",
                        icons: ["fa-brands fa-aws", "fa-brands fa-stripe", "Django", "PostgreSQL"],
                        links: ["https://checkme-out.herokuapp.com/", "https://github.com/sarahrosehumenik/creative_marketplace"]
                },
                {
                        img: [force1, force2, force3],
                        tech: "Static Game",
                        title: "Forcefield",
                        description: "Embark on a mission to save the world with this engaging static web app! Developed with vanilla JS and enhanced with the versatility of CSS Grid, this challenge invites you to guess the password and trigger the forcefield, preventing an asteroid from plunging to Earth. The fate of life as we know it rests in your hands. Best of luck!",
                        icons: ["fa-brands fa-js", "fa-brands fa-css3-alt", "HTML", "Grid"],
                        links: ["https://sarahrosehumenik.github.io/projectone/", "https://github.com/sarahrosehumenik/projectone"]
                }]

        const [projectData, setProjectData] = useState(projectInfo[0])

        return (<ProjectOne projectInfo={projectInfo} projectData={projectData} setProjectData={setProjectData} />)
}