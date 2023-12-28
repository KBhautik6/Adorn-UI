import styled, { css } from "styled-components";
import sizes from "../Size";

export const StyledAvatarSize = css`
  ${({ size }) => `
    width: ${size.width};
    height: ${size.height};
  `}
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const StyledDisplayImage = styled.img`

  ${({ shape }) => css`
    border-radius: ${shape === "circle" ? "50%" : "10%"};
    margin:0 5px;
    ${StyledAvatarSize};
  `}
`;
