import React, {useState} from 'react';
import Card from "../components/Card";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import './HomePage.css';

function Homepage(props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = event => setQuery(event.target.value);
  const handleFilter = event => setFilter(event.target.value);

  const filteredCountries = () => {
    let filteredCountries = props.countries;

    if (query) {
      filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (filter) {
      filteredCountries = filteredCountries.filter(country => country.region.toLowerCase().includes(filter.toLowerCase()));
    }

    return filteredCountries;
  }

  return (
    <>
      <div className="wrapper">
        <SearchBar handleSearch={handleSearch}/>
        <Filter handleFilter={handleFilter}/>
      </div>
      <div className="cardsContainer">
        {filteredCountries().map(({flag, name, population, region, capital}) => (
          <Card key={name} flag={flag} name={name} population={population} region={region} capital={capital}/>
        ))}
      </div>
    </>
  );
}

export default Homepage;
