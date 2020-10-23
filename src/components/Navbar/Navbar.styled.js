import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8pt;
  box-shadow: 0 1px 15px -5px hsl(0, 0%, 70%);
`;

export const NavbarHeader = styled.h1`
  font-weight: 800;
`;

export const DarkModeButton = styled.button`
  background: #fafafa;
  height: 3em;
  font-weight: 300;
  border-color: transparent;
  outline: 0;

  &:hover {
    cursor: pointer;
  }
`;
