import styled, { css } from "styled-components";
import theme from '../../theme'
export const StyledBadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const StyledDisplayImage = styled.img`
  ${({ size }) => css`
    height: ${size}rem;
  `};
  border-radius: 50%;
`;
