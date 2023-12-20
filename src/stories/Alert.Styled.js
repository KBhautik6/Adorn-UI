import styled, { css } from "styled-components";
import { theme } from "../theme";

export const AlertWrapper = styled.div`
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const Alert = styled(AlertWrapper)`
  ${({ type }) => {
    const bgColor = theme?.[`${type}Background`] || theme?.primary;
    const textColor = theme?.[`${type}Text`] || theme?.secondary;

    return css`
      background-color: ${bgColor};
      color: ${textColor};
    `;
  }}
`;

export const OutlineAlert = styled(AlertWrapper)`
  ${({ type }) => {
    const borderColor = theme?.[`${type}Outline`] || theme?.primary;
    const textColor = theme?.[`${type}Text`] || theme?.primary;

    return css`
      border: 2px solid ${borderColor};
      color: ${textColor};
    `;
  }}
`;
