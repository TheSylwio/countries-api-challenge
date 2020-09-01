import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';

function SearchBar() {
  return (
    <div className='searchBar'>
      <FontAwesomeIcon icon={faSearch} className='searchBar__icon'/>
      <input type='text' placeholder='Search for a country...' className='searchBar__input'/>
    </div>
  )
}

export default SearchBar;