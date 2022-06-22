import './Projects.css'
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div id="Header" className="projects-header">
        <div className="headertext">
        <h1>Projects</h1>
      
       <img className="project" src="https://i.imgur.com/S3MZJcV.png"></img>
       <a className="links" href="https://secrets-project6969.herokuapp.com/">Visit Site</a>
       <a className="links" href="https://github.com/sarahrosehumenik/secretsproject">GitHub</a>

       <h2>A place to gather and spill all your tea. It may find
           you your most unique and fun friendships.
       </h2>
       <img className="project" src="https://i.imgur.com/9hpwm7W.png"></img>
       <a className="links" href="https://still-life-of-a.herokuapp.com/">Visit Site</a>
       <a className="links" href="https://github.com/sarahrosehumenik/capstone">GitHub</a>

       <h2>A creative step away from the day to day. Giving your brain
           a gentle excersize of using text to create an image on a drawing canvas.
           Let this alternative world give you a reprieve. 
       </h2>
       <img className="project" src="https://i.imgur.com/Hx9ywvp.png"></img>
       <a className="links" href="https://checkme-out.herokuapp.com/products/">Visit Site</a>
       <a className="links" href="https://github.com/turpen2319/creative_marketplace">GitHub</a>

       <h2>Don't get paid in clout, post your products on Check Me Out.
           A market place for buyers and sellers to connect. Created with 4 contributors. 
       </h2>
       <img className="project" src="https://i.imgur.com/k7K5QRM.png"></img>
       <a className="links" href="https://sarahrosehumenik.github.io/projectone/">Visit Site</a>
       <a className="links" href="https://github.com/sarahrosehumenik/projectone">GitHub</a>

       <h2>Life as we know it is at stake. To save the world from an astroid
           plummeting to earth you must guess the password to trigger the 
           forcefield, good luck!
       </h2>
  </div>
  </div>
    )

}