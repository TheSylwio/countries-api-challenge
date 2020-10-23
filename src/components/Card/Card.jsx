import React from 'react';
import {Link} from "react-router-dom";
import slugify from 'slugify';
import {CardHeader, CardContent, CardDescription, Flag, StyledCard} from './Card.styled';

function Card({name, flag, population, region, capital}) {
  return (
    <StyledCard>
      <Link to={slugify(name.toLowerCase(), {remove: /[*+~.()'"!:@]/g})}>
        <Flag src={flag} alt={name + ' flag'}/>
        <CardContent>
          <CardHeader>{name}</CardHeader>
          <CardDescription>
            <p>
              <strong>Population: </strong>{population.toLocaleString()}
            </p>
            <p>
              <strong>Region: </strong>{region}
            </p>
            <p>
              <strong>Capital: </strong>{capital || '-'}
            </p>
          </CardDescription>
        </CardContent>
      </Link>
    </StyledCard>
  );
}

export default Card;