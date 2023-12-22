// Card.styled.js
import styled from 'styled-components';
import theme from '../../theme'
export const StyleContainer=styled.div`
  padding: 10px;
  text-align:left;
  border-radius:5px;
  background-color:${theme.cardBg};
  width:25%;
  margin:auto; 
`

export const StyledCard = styled.div`
  h2 {
    font-size: 1.5rem;
    color:${theme.primary};
  }

  p {
    font-size: 1rem;
  }
`;
