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
  color: ${({ colorinput }) => (colorinput === "secondary" ? theme?.[colorinput] : theme.white)};
  background-color: ${({ colorinput}) =>
    colorinput === "secondary" ? theme.white : theme?.[colorinput]};
`;

export const StyledOutlineAlert = styled(StyledAlert)`
  background-color: transparent;
  border: 1px solid ${({colorinput }) => theme?.[colorinput]};
  color: ${({colorinput }) => theme?.[colorinput]};
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
`;
