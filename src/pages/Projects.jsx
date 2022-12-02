import './Projects.css'
import { useState, useEffect } from 'react';
import ProjectOne from "../components/ProjectOne.js";






export default function Projects() {
    const projectInfo = [
        { img: ["https://i.imgur.com/FsqfNhT.png",
                "https://i.imgur.com/Gz8KWUy.png",
                "https://i.imgur.com/Bhqeftf.png",
                "https://i.imgur.com/l0CWI1M.png"],
         tech: "MEN Stack",
         title: "Secrets Make Friends",
         description: "A place to gather and spill all your tea. This website can build the most unique and fun friendships This web app. built with a MEN stack displays serverside rendering. Full CRUD using MongoDB.",
         icons: ["fa-brands fa-google","fa-brands fa-node-js","MongoDB","Mongoose"],
         links:["https://secrets-project6969.herokuapp.com/", "https://github.com/sarahrosehumenik/secretsproject"]
     },
     { img: ["https://i.imgur.com/QFI4zgH.png",
              "https://i.imgur.com/SzEH1QK.png",
              "https://i.imgur.com/G9JSRZT.png",
              "https://i.imgur.com/m7CL8Ti.png"],
    tech: "Django",
    title: "Check Me Out",
    description: "Don't get paid in clout, post your products on Check Me Out. A place build with django encorperating the Stripe API, photos functionality brought you by AWS. Can you say data entities everywhere? created with 4 contributors.",
    icons: ["fa-brands fa-aws","fa-brands fa-stripe","Django","PostgreSQL"],
    links:["https://checkme-out.herokuapp.com/", "https://github.com/sarahrosehumenik/creative_marketplace"]
    },
    { img: ["https://i.imgur.com/8rypuJO.png",
              "https://i.imgur.com/d1KdGjD.png",
              "https://i.imgur.com/fY9B8EV.png",
              "https://i.imgur.com/4C1oF7F.png"],
    tech: "Static Game",
    title: "Forcefield",
    description: "Life as we know it is as stake. To save the world from an astroid plummeting to earth, guess the password on this fun static web app to trigger the forceworld and save us all, Good luck!",
    icons: ["fa-brands fa-js","fa-brands fa-css3-alt","HTML","Grid"],
    links:["https://sarahrosehumenik.github.io/projectone/", "https://github.com/sarahrosehumenik/projectone"]
    }]
const [projectData, setProjectData] = useState(projectInfo[0])


   return (
       <>
       
      
       <ProjectOne projectInfo={projectInfo} projectData={projectData} setProjectData={setProjectData} />
   
       </>
      )

}