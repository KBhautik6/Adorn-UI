import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const Alert = styled.button`
  border: 2px solid;
  width: 100%;
  padding: 10px 20px;
  text-align: left;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.4rem;
  ${({ type, isOutLine, border }) => css`
    background-color: ${isOutLine ? "transparent" : theme?.[type]};
    color: ${isOutLine ? theme?.[type] : theme.white};
    border-color: ${border || "1px solid"};
  `}
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
`;
