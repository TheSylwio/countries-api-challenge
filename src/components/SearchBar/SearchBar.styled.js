import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchBarWrapper = styled.div`
  padding: 8pt;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #CACACA;
  border-radius: 4pt;
  box-shadow: 0 0 10px -5px hsl(0, 0%, 70%);
  background: #FFFFFF;
  
  @media (min-width: 1400px) {
    width: 40%;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  flex: 1;
  height: 10pt;
`;

export const StyledSearchBar = styled.input`
  flex: 9;
  border: 0;
  padding: 4pt;
  
  &:focus {
    outline: 0;
  }
`;
