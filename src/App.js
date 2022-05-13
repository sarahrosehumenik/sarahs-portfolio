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
            <p>Full Stack Software Engineer</p>
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
            <p className="aboutdescript">a fullstack software engineer leaving the art world to join the future.</p>
            
          </section>

          <section id="S2" className="section-2">
             <img className="skills" src="https://i.imgur.com/H5sWPlm.png"></img> 
             <h3 className="skillstop">Skills</h3>
             <img className="skillicons" src="https://i.imgur.com/1t3ZVMu.png"></img>
          </section>
           
          <section id="S3" className="section-3">
         
          <h4 id="projects">Featured Projects<br></br>
         
            </h4> 
            <img className="one" src="https://i.imgur.com/0ca2bUf.png"></img>
           
            <img className="two" src="https://i.imgur.com/MvY07BD.png"></img>
            <img className="three" src="https://i.imgur.com/J59pFPf.png"></img>
          </section>

        </Router>
        
    </div>
  );
}

export default App;

