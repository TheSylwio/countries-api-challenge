import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import {
  CardHeader,
  CardContent,
  CardDescription,
  Flag,
  StyledCard,
} from './Card.styled';

const Card = ({ country }) => {
  return (
    <StyledCard>
      <Link
        to={slugify(country.name.toLowerCase(), { remove: /[*+~.()'"!:@]/g })}
      >
        <Flag src={country.flag} alt={`${country.name} flag`} />
        <CardContent>
          <CardHeader>{country.name}</CardHeader>
          <CardDescription>
            <p>
              <strong>Population: </strong>
              {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Capital: </strong>
              {country.capital}
            </p>
          </CardDescription>
        </CardContent>
      </Link>
    </StyledCard>
  );
};

Card.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
  }).isRequired,
};

export default Card;
