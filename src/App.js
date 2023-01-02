import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home';
import Experiments from './Components/Experiments';
import About from './Components/About';
import Contact from './Components/Contact';
import Simulation from './Components/Simulation';

function App() {
  return (
   <>
   <Navbar/>   
   <Home/>
   <Experiments/>
   <Simulation/>
   <About/>
   <Contact/>
   
   </>
  );
}

export default App;
