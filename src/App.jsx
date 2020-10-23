import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Country from "./pages/Country/Country";
import {ThemeProvider} from "styled-components";
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/:country' component={Country}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
