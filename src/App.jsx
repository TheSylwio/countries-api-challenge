import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Homepage from './pages/Homepage';
import Country from './pages/Country/Country';
import theme from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import initializeStore from './redux/store';

const App = () => {
  const store = initializeStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path='/' component={Homepage} exact />
            <Route path='/:country' component={Country} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
