import styled from "styled-components";
import { theme } from "../../theme";

export const StyledAlert = styled.button`
  border: 2px solid;
  border-radius: 5px;
  width: 100%;
  padding: 10px 10px;
  text-align: left;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  color: ${({ color }) => (color === "secondary" ? theme?.[color] : theme.white)};
  background-color: ${({ color}) =>
    color === "secondary" ? theme.white : theme?.[color]};
`;

export const StyledOutlineAlert = styled(StyledAlert)`
  background-color: transparent;
  border: 1px solid ${({color }) => theme?.[color]};
  color: ${({color }) => theme?.[color]};
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
`;
