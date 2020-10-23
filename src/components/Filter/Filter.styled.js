import styled, {keyframes} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const hideList = keyframes`
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
`;

export const StyledFilter = styled.div`
  position: relative;
  display: block;
  width: 50%;
  margin-top: 32pt;
  align-self: flex-start;
  box-shadow: 0 0 10px -5px hsl(0, 0%, 70%);
  border-radius: 4pt;
  background: #FFFFFF;
  
  @media (min-width: 1400px) {
    width: 20%;
    margin-top: 0;
  }
`;

export const ItemsList = styled.ul`
  position: absolute;
  width: 100%;
  padding: 0;
  list-style: none;
  border-radius: 4pt;
  opacity: 0;
  animation: ${hideList} .5s .5s forwards step-start;
`;

export const Item = styled.label`
  display: block;
  padding: 15px;
  background-color: #fff;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  opacity: 0.3;
  transition: 0.2s ease;
`;

export const CurrentItem = styled.div`
  position: relative;
  cursor: pointer;
  outline: none;
  
  &:focus + ${ItemsList} {
    opacity: 1;
    animation-name: none;
    
    & ${Item} {
      cursor: pointer;
    }
    
    & ${Icon} {
      transform: translateY(-50%) rotate(180deg);
    }
  }
`;

export const Value =  styled.div`
 display: flex;
`;

export const Text = styled.p`
  display: none;
  width: 100%;
  margin: 0;
  padding: 15px;
`;

export const Input = styled.input`
  display: none;
  
  &:checked + ${Text} {
    display: block;
  }
`;
