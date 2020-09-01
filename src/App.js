import React, {useState, useEffect} from 'react';
import Card from "./components/Card";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(result => setCountries(() => result))
  }, []);

  const handleSearch = event => setQuery(event.target.value);

  const handleFilter = event => setFilter(event.target.value);

  const filteredCountries = () => {
    let filteredCountries = countries;

    if (query) {
      filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (filter) {
      filteredCountries = filteredCountries.filter(country => country.region.toLowerCase().includes(filter.toLowerCase()));
    }

    return filteredCountries;
  }

  return (
    <div className="app">
      <Navbar/>
      <div className="app__content">
        <SearchBar handleSearch={handleSearch}/>
        <Filter handleFilter={handleFilter}/>
        {filteredCountries().map(({flag, name, population, region, capital}) => (
          <Card key={name} flag={flag} name={name} population={population} region={region} capital={capital}/>
        ))}
      </div>
    </div>
  );
}

export default App;
