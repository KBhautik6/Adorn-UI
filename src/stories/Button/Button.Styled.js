import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const StyledButtonComponent = styled.button`
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  padding: 10px 20px;
  border: 2px solid;
  border-color: ${theme.white};

  background-color: ${({ type }) =>
    type === "secondary" ? theme.white : theme?.[type]};
  color: ${({ type }) =>
    type === "secondary" ? theme?.[type] : theme.white};
`;

export const StyledOutlineButton = styled(StyledButtonComponent)`
  border: 2px solid;
  border-color: ${({ type }) => theme?.[type]};
  color: ${({ type }) => theme?.[type]};
  background-color: ${({ inputcolor }) => theme?.[inputcolor]};

  &:hover,
  &:active {
    background-color: ${({ type }) => theme?.[type]};
    color: ${theme.white};
  }
`;

export const StyledButtontext = styled(StyledButtonComponent)`
  color: ${({ type }) => theme?.[type]};
  bottom: 2px solid transparent;
  background-color: transparent;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
