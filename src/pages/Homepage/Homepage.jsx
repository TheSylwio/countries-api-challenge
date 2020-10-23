import React, {useState} from 'react';
import {Content, OptionsWrapper} from './Homepage.styled';
import CountriesGrid from "../../components/CountriesGrid";
import Filter from "../../components/Filter/Filter";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Homepage = (props) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = ({target}) => setQuery(target.value);
  const handleFilter = ({target}) => setFilter(target.value);
  //
  // const filteredCountries = () => {
  //   let filteredCountries = props.countries;
  //
  //   if (query) {
  //     filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()));
  //   }
  //
  //   if (filter) {
  //     filteredCountries = filteredCountries.filter(country => country.region.toLowerCase().includes(filter.toLowerCase()));
  //   }
  //
  //   return filteredCountries;
  // }

  return (
    <>
      <Navbar/>
      <Content>
        <OptionsWrapper>
          <SearchBar handleSearch={handleSearch}/>
          <Filter handleFilter={handleFilter}/>
        </OptionsWrapper>
        <CountriesGrid countries='123'/>
      </Content>
    </>
  );
}

export default Homepage;
