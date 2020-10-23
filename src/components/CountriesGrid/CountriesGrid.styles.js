import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20pt;
    margin-top: 24pt;
    justify-items: center;
    align-items: start;
`;

export default Grid;