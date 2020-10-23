const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_QUERY = 'SET_QUERY';
const SET_FILTER = 'SET_FILTER';

const initialState = {
  countries: [],
  query: '',
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
