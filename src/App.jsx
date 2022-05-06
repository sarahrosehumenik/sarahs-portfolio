import './App.css';
import NavBar from './components/NavBar'
// import AboutMe from '../components/AboutMe/AboutMe'
// import Contact from '../components/Contact/Contact'
// import Home from '../components/Home/Home'
// import Projects from '../components/Projects/Projects'
import { BrowserRouter as Router } from 'react-router-dom'
// import { Routes, Route } from "react-router-dom";




export default function App() {
  return (
    <main className="App">
      <Router>
        <NavBar />
      </Router>
    </main>
  );
}


