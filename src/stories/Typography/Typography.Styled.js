import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContent = styled.div`
  color: ${({ type }) => theme?.[type]};

  ${({ as }) =>
    as &&
    css`git 
      line-height: 0.5;
      font-weight: 600;
      font-family: "Rubik", sans-serif;
    `}
`;
