import styled, { css } from "styled-components";

const size = {
  circle: {
    widths: "150px",
    heights: "150px",
  },
  square: {
    widths: "150px",
    heights: "150px",
  },
  response: {
    widths: "100%",
    heights: "100%",
  },
};

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
      width: ${size[shape].widths || "auto"};
      height: ${size[shape].heights || "auto"};
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
    shape === "response" &&
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
