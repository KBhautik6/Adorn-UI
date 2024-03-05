import styled, { css } from "styled-components";
import imageSize from "../../Size.js";

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  object-fit: cover;
  ${StyledImage}
`;

export const StyledImage = styled.img`
  margin: 0px;
  ${({ shape }) =>
    shape &&
    css`
      width: ${imageSize[shape].widths || "auto"};
      height: ${imageSize[shape].heights || "auto"};
    `};
`;

export const StyledImageCircle = css`
  ${({ shape }) =>
    shape === "circle" &&
    css`
      border-radius: 50%;
      overflow: hidden;
      margin: 0 5px;
    `};
  ${StyledImageCircle};
  ${StyledImageSquare};
  ${StyledImageResponsive};
`;

export const StyledImageSquare = css`
  ${({ shape }) =>
    shape === "square" &&
    css`
      object-fit: cover;
      overflow-clip-margin: content-box;
      overflow: clip;
    `};
`;

export const StyledImageResponsive = css`
  ${({ shape }) =>
    shape === "fullimageSize" &&
    css`
      object-fit: cover;
      width: 100%;
      height: auto;
      padding: 10px;
      margin: 10px;
      @media (max-width: 769px) {
        width: 100%;
        height: auto;
      }
    `};
`;
