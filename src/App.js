import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Experiments from './Components/Experiments';
import { Home2 } from './Components/Home2';


function App() {
  return (
   <>
   <Navbar/>  
   <Home2/> 
   <Home/>
    <Experiments/>
   <About/>
   <Contact/>
   
   
   </>
  );
}

export default App;
