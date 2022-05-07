import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import TopBtn from './components/TopBtn'

const App = () => {
  return (
    <div className="App">

      <Router>

          <NavBar/>
          <TopBtn />

          <div id="Header" className="header">
            <h1> HEADER </h1>
          </div>

          <section id="S1" className="section-1">
            <h1> SECTION 1 </h1>
          </section>

          <section id="S2" className="section-2">
            <h1> SECTION 2 </h1>
          </section>

          <section id="S3" className="section-3">
            <h1> SECTION 3 </h1>
          </section>

        </Router>
        
    </div>
  );
}

export default App;

