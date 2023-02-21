/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HashLink } from 'react-router-hash-link';



const Navbar = () => {
  return (

    <nav className="navbar  navbar-expand-lg  navbar-light  bg-light  fixed-top  ">
 
    <HashLink to={`/#`} className="nav-link  text-dark px-4 " >
        V-Lab</HashLink>
    
{/*
    <a className="nav-link  text-dark px-4" href="#">
    V-Lab
  </a>
 */}

  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item active">
      <HashLink to={`/#`} className="nav-link  text-dark px-4" >
              Home</HashLink>
              {/* 
        <a className="nav-link  text-dark px-4 " href="#">
          Home 
          </a>
           */}
      </li>
      <li className="nav-item">
      <HashLink to={`/#Experiments`} className="nav-link   text-dark px-4 " >
      Experiments</HashLink>
      {/*
        <a className="nav-link  text-dark  px-4" href="#Experiments">
          Experiments
        </a>
         */}
      </li>
      <li className="nav-item">
      <HashLink to={`/#About`} className="nav-link  text-dark px-4 " >
              About</HashLink>
        {/*<a className="nav-link  text-dark px-4" href="#About">
          About 
        </a> */}
      </li>
      <li className="nav-item">
      <HashLink to={`/#Contact`} className="nav-link  text-dark px-4 " >
      Contact
    </HashLink>
       {/* <a className="nav-link  text-dark px-4 " href="#Contact">
          Contact
        </a> */}
      </li>


      
      {/* <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li> */}


      
    </ul>
  </div>
</nav>
  )
}

export default Navbar;