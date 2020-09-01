import React, {useState, useEffect} from 'react';
import Card from "./components/Card";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(result => setCountries(() => result))
  }, []);

  const handleSearch = event => setQuery(event.target.value);

  const filteredCountries = () => {
    if (query) {
      return countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()));
    }

    return countries;
  }

  return (
    <div className="app">
      <Navbar/>
      <div className="app__content">
        <SearchBar handleSearch={handleSearch}/>
        <Filter/>
        {filteredCountries().map(({flag, name, population, region, capital}) => (
          <Card key={name} flag={flag} name={name} population={population} region={region} capital={capital}/>
        ))}
      </div>
    </div>
  );
}

export default App;
