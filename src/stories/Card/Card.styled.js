// Card.styled.js
import styled from 'styled-components';
import theme from '../../theme'

export const StyleContainer=styled.div`
  display: flex;
  justify-content: center;
  padding: 5%; 
`

export const StyledCardBox = styled.div`
  display: flex;
  flex-flow: column;
  height: max-content;
  max-width: 19rem;
  background-color: ${theme.white};
  border-radius: 5px;
  padding: 7px;
  transition: 300ms ease;
  &:hover,
  &:active {
    box-shadow: 5px 4px 8px rgba(3, 0, 0, 0.1);
  }
`;

export const StyledCardTitle=styled.h3`
  color:${theme.primary};
  padding-bottom:2px;
`;

export const StyledCardParagraph = styled.p`
  font-family: sans-serif;
  color: ${theme.secondary};
`;

export const StyledCardBadges=styled.img`
  width:100%;
  border-radius:5px;
`

export const StyledBadgesText=styled.div`
  top:85px;
  left:366px;
  background-color:${theme.primary};
  color:${theme.white};
  font-size:15px;
  font-weight:600;
  padding:2px;
`

export const StyledDissMissBadges=styled(StyledBadgesText)`
  top: 95px;
  left: 630px;
  padding: 8px 12px;
  font-weight: 600;
  &:hover,
  &:active {
    box-shadow: 5px 4px 8px rgba(3, 0, 0, 0.1);
  }
`

export const StyledBadgesMiddleText=styled(StyledBadgesText)`
  top: 160px;
  left: 470px;
  padding: 8px 12px;
  font-weight: 600;
  background-color: transparent;
  font-size: 16px;
  `

export const StyledOutlineButton=styled.button`
  border: 1px solid ${theme.primary};
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  background-color: transparent;
  color: ${theme.primary};
  border-radius: 2px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`

export const StyledBadgesmallImage=styled(StyledCardBadges)`
  width: 15%;
  height: 25%;
  padding-top: 2.1%;
`

export const StyledHorizontalCard=styled.div`
  display: flex;
  gap: 5px;
  flex-flow: row;
  height: max-content;
  max-width: 720px;
  background-color: ${theme.white};
  border-radius: 5px;
  padding: 8px;
  transition: 500ms;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`

