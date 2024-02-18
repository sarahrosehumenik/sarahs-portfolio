import './App.css';
import Navigation from '../components/NavBar/Navigation';
import { Routes, Route } from 'react-router-dom';
import Landing from "./Landing.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
import ComingSoon from "./ComingSoon.jsx"

const App = () => {
  return (
    <main className="app">
     <Navigation />
       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
       </Routes>
    </main>
  );
}

export default App;

