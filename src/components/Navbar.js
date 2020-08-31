import React from "react";
import './Navbar.css';

function Navbar() {
  return(
    <nav className='navbar'>
      <h1 className='navbar__header'>Where in the world?</h1>
      <button className='navbar__button'>
        {/* TODO: Insert Icon */}
        Dark Mode
      </button>
    </nav>
  );
}

export default Navbar;