import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import './Filter.css';

function Filter(props) {
  const filterOptions = [
    'Filter by Region',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ];

  return (
    <div className='filter'>
      <div className="filter__current" tabIndex='1'>
        {filterOptions.map((option, index) => (
          <div className="filter__value" key={index}>
            <input type="radio" className='filter__input' id={index} value={option.toLowerCase()} name='country'
                   checked={index === 0 ? 'checked' : null} onChange={props.handleFilter}/>
            <p className='filter__text'>{option}</p>
          </div>
        ))}
        <FontAwesomeIcon icon={faAngleDown} className='filter__icon'/>
      </div>
      <ul className='filter__list'>
        {filterOptions.map((option, index) => (
          <li key={index}>
            <label className='filter__option' htmlFor={index} aria-hidden>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;