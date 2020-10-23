import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { StyledNavbar, NavbarHeader, DarkModeButton } from './Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarHeader>Where in the world?</NavbarHeader>
      <DarkModeButton>
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark Mode</span>
      </DarkModeButton>
    </StyledNavbar>
  );
};

export default Navbar;
