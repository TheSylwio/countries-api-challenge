import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 4pt;
  width: 80%;
  margin-top: 24pt;
  background: #FFFFFF;
  box-shadow: 0 0 10px -5px hsl(0, 0%, 70%);
  
  @media (min-width: 1400px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 4pt 4pt 0 0;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 24pt;
`;

export const CardHeader = styled.header`
  font-weight: 800;
  font-size: 21px;
  margin-bottom: 18pt;
`;

export const CardDescription = styled.div`
  line-height: 1.1em;
`;
