import React from 'react';
import { useSelector } from 'react-redux';
import Grid from './CountriesGrid.styles';
import getCountries from '../../redux/selectors/root';
import Card from '../Card';

const CountriesGrid = () => {
  const countries = useSelector(getCountries);

  return (
    <Grid>
      {countries &&
        countries.map(country => <Card country={country} key={country.name} />)}
    </Grid>
  );
};

export default CountriesGrid;
