import styled from "styled-components";
import theme from "../../theme";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 190px;
`;

export const StyledInputLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
  color: ${(props) =>
    props.label === "Password" ?  theme.primary : theme.black};
`;

export const StyledUserInput = styled.input`
  font-family: Rubik, sans-serif;
  padding: 5px;
  width: 20rem;
`;
