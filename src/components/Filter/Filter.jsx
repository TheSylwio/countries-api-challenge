import React from 'react';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {StyledFilter, CurrentItem, ItemsList, Item, Icon, Value, Input, Text} from './Filter.styled';

const Filter = ({handleFilter}) => {
  const filterOptions = [
    'Filter by Region',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ];

  return (
    <StyledFilter>
      <CurrentItem tabIndex='1'>
        {filterOptions.map((option, index) => (
          <Value key={index}>
            <Input type="radio" id={index} value={option.toLowerCase()} name='country'
                   checked={index === 0 ? 'checked' : null} onChange={handleFilter}/>
            <Text>{option}</Text>
          </Value>
        ))}
        <Icon icon={faAngleDown} />
      </CurrentItem>
      <ItemsList>
        {filterOptions.map((option, index) => (
          <li key={index}>
            <Item htmlFor={index} aria-hidden>{option}</Item>
          </li>
        ))}
      </ItemsList>
    </StyledFilter>
  );
}

export default Filter;