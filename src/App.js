import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Homepage from "./views/HomePage";
import DetailPage from "./views/DetailPage";
import slugify from "slugify";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(result => setCountries(() => result))
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar/>
        <div className="app__content">
          <Switch>
            <Route exact path='/'>
              <Homepage countries={countries}/>
            </Route>
            {countries.map(country => (
              <Route path={'/' + slugify(country.name.toLowerCase())} key={country.name}>
                <DetailPage country={country}/>
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
