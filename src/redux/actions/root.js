export const updateCountries = countries => {
  return {
    type: 'SET_COUNTRIES',
    payload: countries,
  };
};

export const updateFilter = filter => {
  return {
    type: 'SET_FILTER',
    payload: filter,
  };
};

export const updateQuery = query => {
  return {
    type: 'SET_QUERY',
    payload: query,
  };
};
