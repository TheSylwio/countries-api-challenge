import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16pt;
  
  @media (min-width: 1440px) {
    padding: 32pt;
  }
`;
