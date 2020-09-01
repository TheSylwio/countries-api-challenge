import React, {useState, useEffect} from 'react';
import Card from "./components/Card";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(result => setCountries(() => result))
  }, []);

  return (
    <div className="app">
      <Navbar/>
      <div className="app__content">
        <SearchBar/>
        <Filter/>
        {countries.map(({flag, name, population, region, capital}) => (
          <Card key={name} flag={flag} name={name} population={population} region={region} capital={capital}/>
        ))}
      </div>
    </div>
  );
}

export default App;
