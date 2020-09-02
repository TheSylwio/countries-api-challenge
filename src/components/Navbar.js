import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <h1 className='navbar__header'>Where in the world?</h1>
      </Link>
      <button className='navbar__button'>
        {/* TODO: Insert Icon */}
        Dark Mode
      </button>
    </nav>
  );
}

export default Navbar;