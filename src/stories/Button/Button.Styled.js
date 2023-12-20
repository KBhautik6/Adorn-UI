import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const StyledButtonComponent = styled.button`
  diplay: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  border: 2px solid;

  ${({ type, outline, border }) => css`
    background-color: ${outline ? "transparent" : theme?.[type]};
    color: ${outline ? theme?.[type] : theme.white};
    border-color: ${border ? "transparent" : theme?.[type]};
  `}

  text-align: center;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;

  ${({ type, outline, hovers }) => css`
    background-color: ${outline ? "transparent" : theme?.[type]};
    color: ${outline ? theme?.[type] : theme.white};
    ${!hovers &&
    css`
      &:hover,
      &:active {
        background-color: ${outline ? theme?.[type] : theme?.[type]};
        color: white;
      }
    `}
  `}
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
