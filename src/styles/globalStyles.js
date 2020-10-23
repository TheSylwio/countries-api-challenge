import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    padding: 0;
    margin: 0;
    background: hsl(0, 0%, 98%);
    color: hsl(200, 15%, 8%);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default globalStyles;
