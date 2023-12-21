import styled, { css } from "styled-components";
export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  object-fit:cover;
`;
export const StyledImage = styled.img`
  ${({ Size }) => css`
    height: ${Size}rem;
  `};
  ${({ shape }) => css`
    border-radius: ${shape === "circle" ? "50%" : "0%"};
  `}
`;