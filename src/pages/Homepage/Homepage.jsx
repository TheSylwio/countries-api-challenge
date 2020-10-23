import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Content, OptionsWrapper } from './Homepage.styled';
import CountriesGrid from '../../components/CountriesGrid';
import Filter from '../../components/Filter/Filter';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { updateCountries } from '../../redux/actions/root';

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(result => dispatch(updateCountries(result)));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Content>
        <OptionsWrapper>
          <SearchBar />
          <Filter />
        </OptionsWrapper>
        <CountriesGrid />
      </Content>
    </>
  );
};

export default Homepage;
