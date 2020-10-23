import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './Country.css';
import slugify from "slugify";

function Country({country: {borders, name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages}}) {
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchBorders = border => {
      fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
        .then(result => result.json())
        .then(result => setBorderCountries(prevState => ([...prevState, result])))
    }

    borders.forEach(border => fetchBorders(border))
  }, [borders]);

  let history = useHistory();

  return (
    <>
      <button className='detailPage__backButton' onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <span>Back</span>
      </button>
      <div className="detailPage__country">
        <img src={flag} alt={name + ' flag'}/>
        <h1>{name}</h1>
        <div className="country__primaryInfo">
          <p>
            <strong>Native Name: </strong>{nativeName}
          </p>
          <p>
            <strong>Population: </strong>{population.toLocaleString()}
          </p>
          <p>
            <strong>Region: </strong>{region}
          </p>
          <p>
            <strong>Sub Region: </strong>{subregion}
          </p>
          <p>
            <strong>Capital: </strong>{capital}
          </p>
        </div>
        <div className="country__secondaryInfo">
          <p>
            <strong>Top Level Domain: </strong>{topLevelDomain}
          </p>
          <p>
            <strong>Currencies: </strong>{currencies.map(country => country.name).join(', ')}
          </p>
          <p>
            <strong>Languages: </strong>{languages.map(country => country.name).join(', ')}
          </p>
        </div>
        <h2>Border countries:</h2>
        <div className="country__borderCountries">
          {borderCountries.map(country => (
            <button key={country.name} className='borderCountries__button'
                    onClick={() => history.push(`/${slugify(country.name.toLowerCase(), {remove: /[*+~.()'"!:@]/g})}`)}>
              {country.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Country;