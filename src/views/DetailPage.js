import React from 'react';
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './DetailPage.css';

function DetailPage({country}) {
  let history = useHistory();

  return (
    <>
      <button className='detailPage__backButton' onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <span>Back</span>
      </button>
      <div className="detailPage__country">
        <img src={country.flag} alt={country.name + ' flag'}/>
        <h1>{country.name}</h1>
        {console.log(country)}
        <div className="country__primaryInfo">
          <p>
            <strong>Native Name: </strong>{country.nativeName}
          </p>
          <p>
            <strong>Population: </strong>{country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region: </strong>{country.region}
          </p>
          <p>
            <strong>Sub Region: </strong>{country.subregion}
          </p>
          <p>
            <strong>Capital: </strong>{country.capital}
          </p>
        </div>
        <div className="country__secondaryInfo">
          <p>
            <strong>Top Level Domain: </strong>{country.topLevelDomain}
          </p>
          <p>
            <strong>Currencies: </strong>{country.currencies.map(country => country.name).join(', ')}
          </p>
          <p>
            <strong>Languages: </strong>{country.languages.map(country => country.name).join(', ')}
          </p>
        </div>
        <div className="country__borderCountries">
          <h2>Border countries:</h2>
        </div>
      </div>
    </>
  );
}

export default DetailPage;