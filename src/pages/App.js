import './App.css';


import NavBar from '../components/NavBar/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';

import Landing from "./Landing.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"

const App = () => {
  return (
    <main className="app">



      <NavBar />



      <Routes>

        <Route path="/" element={<Landing />} />


        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />





      </Routes>






    </main>
  );
}

export default App;

