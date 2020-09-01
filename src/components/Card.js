import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <img className='card__flag' src={props.flag} alt={props.name + ' flag'}/>
      <div className="card__content">
        <header className='content__header'>{props.name}</header>
        <div className="content__description">
          <p>
            <strong>Population: </strong>{props.population.toLocaleString()}
          </p>
          <p>
            <strong>Region: </strong>{props.region}
          </p>
          <p>
            <strong>Capital: </strong>{props.capital || '-'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;