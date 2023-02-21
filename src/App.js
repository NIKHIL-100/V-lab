import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
