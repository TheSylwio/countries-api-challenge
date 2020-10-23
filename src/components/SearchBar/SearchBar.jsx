import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Icon, SearchBarWrapper, StyledSearchBar } from './SearchBar.styled';
import { updateQuery } from '../../redux/actions/root';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = ({ target }) => dispatch(updateQuery(target.value));

  return (
    <SearchBarWrapper>
      <Icon icon={faSearch} />
      <StyledSearchBar
        type='text'
        placeholder='Search for a country...'
        onChange={handleSearch}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
