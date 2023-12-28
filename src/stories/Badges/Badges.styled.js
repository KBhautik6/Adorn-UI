import styled, { css } from "styled-components";
import theme from "../../theme";
import size from "../../Size"

export const StyledBadgesContainer = styled.div`
  position: relative;
`;

export const StyledAvatarImage = styled.img`
  ${({ size }) => css`
    height: ${size}rem;
    border-radius: 50%;
  `}
`;

export const StyledBadgeIcon = styled.div`
  position: absolute;
  left: 52%;
  /* border-color: ${theme?.white}; */
  top: 66%;
  transform: translateX(50%);
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => theme?.[color]};
  border-radius: 50%;
  display: inline-block;
  border: 2px solid;
  border-color: white;
`;

export const StyledImager = styled.div`
  position: relative;
`;

export const StyledBadgesIcon = styled(StyledBadgeIcon)`
  background-color: ${({ color }) => theme?.[color]};
  left: 62%;
  top: 7%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  text-align: center;
`;

export const StyledIconImageBadge = styled(StyledAvatarImage)`
  ${({ size }) => css`
    height: ${size}rem;
  `}
  border-radius: 0%;
`;
