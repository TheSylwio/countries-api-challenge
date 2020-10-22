import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon, SearchBarWrapper, StyledSearchBar } from './SearchBar.styled';

const SearchBar = ({ handleSearch }) => {
  return (
    <SearchBarWrapper>
      <StyledIcon icon={faSearch} />
      <StyledSearchBar type='text' placeholder='Search for a country...' onChange={handleSearch} />
    </SearchBarWrapper>
  );
};

export default SearchBar;