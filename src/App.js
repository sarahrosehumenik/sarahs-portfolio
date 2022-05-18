import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Link from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TopBtn from './components/TopBtn'

const App = () => {
  return (
    <div className="App">

      <Router>

          <NavBar/>
          <TopBtn />

          <div id="Header" className="header">
            <div className="headertext">
            <h1>Sarah Rose</h1>
            <p>Full Stack Software Engineer</p><br></br>
            <p>Email: Sarahrosehumenik@gmail.com</p>
            <a href="https://github.com/sarahrosehumenik"> <img className="icon" src="https://i.imgur.com/ji4mQ78.png"></img></a>
            <a href="https://www.linkedin.com/in/sarah-rose33/"> <img className="icon" src="https://i.imgur.com/7qrrl44.png"></img></a>
           
    
            </div>
            <h1> <img className="hello" src="https://i.imgur.com/3GFp3JH.png"></img> </h1>
          </div>

          <section id="S1" className="section-1">
            <img className="about"src="https://i.imgur.com/2tzwd7F.png"></img> 
            <div className="abouttext">
            <h2 id="about">Who is Sarah?</h2>
            </div>
            <p className="aboutdescript">Colorado based native,  fullstack software engineer transitioning from the art world to join the future in technology.
            </p>
            
          </section>

          <section id="S2" className="section-2">
             <img className="skills" src="https://i.imgur.com/H5sWPlm.png"></img> 
             <h3 className="skillstop">Skills</h3>
             <img className="skillicons" src="https://i.imgur.com/1t3ZVMu.png"></img>
          </section>
           
          <section id="S3" className="section-3">
         
          <h4 id="projects">Featured Projects<br></br>
         
            </h4> 
            <img className="zero" src="https://i.imgur.com/7sejaf7.png"></img>
            <a className="zero-link" href="https://still-life-of-a.herokuapp.com/">Visit Site</a>
            <a className="zero-repo" href="https://github.com/sarahrosehumenik/capstone">Git Repo</a>


            <img className="one" src="https://i.imgur.com/0ca2bUf.png"></img>
            <a className="one-link" href="https://checkmeout-marketplace.herokuapp.com/products/">Visit Site</a>
            <a className="one-repo" href="https://github.com/sarahrosehumenik/creative_marketplace">Git Repo</a>
            
           
            <img className="two" src="https://i.imgur.com/MvY07BD.png"></img>
            <a className="two-link" href="https://secrets-project6969.herokuapp.com/">Visit Site</a>
            <a className="two-repo" href="https://github.com/sarahrosehumenik/secretsproject">Git Repo</a>

            <img className="three" src="https://i.imgur.com/J59pFPf.png"></img>
            <a className="three-link" href="https://sarahrosehumenik.github.io/projectone/">Visit Site</a>
            <a className="three-repo" href="https://github.com/sarahrosehumenik/projectone">Git Repo</a>
          </section>

        </Router>
        
    </div>
  );
}

export default App;

