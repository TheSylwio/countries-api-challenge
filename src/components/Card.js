import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <img className='card__flag' src="https://restcountries.eu/data/deu.svg" alt="Flag"/>
      <div className="card__content">
        <header className='content__header'>Germany</header>
        <div className="content__description">
          <p>
            <strong>Population: </strong>81,770,900
          </p>
          <p>
            <strong>Region: </strong>Europe
          </p>
          <p>
            <strong>Capital: </strong>Berlin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;