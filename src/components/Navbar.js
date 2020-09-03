import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='navbar__header'>Where in the world?</h1>
      <button className='navbar__button'>
        <FontAwesomeIcon icon={faMoon}/>
        <span>Dark Mode</span>
      </button>
    </nav>
  );
}

export default Navbar;