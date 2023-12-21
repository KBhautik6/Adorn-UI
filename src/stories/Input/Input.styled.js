import styled from "styled-components";
import theme from "../../theme";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding:15px 50px;
`;

export const StyledInputLabel = styled.label`
  margin-right: 10px; // Adjusted margin for better alignment
  font-weight: bold;
  font-size:15px;
  color: ${(props) => (props.label === "Password" ? "red" : "black")};
`;

export const StyledUserInput = styled.input`
  margin-bottom: 10px;
  font-family:Rubik, sans-serif;
  padding: 5px;
  width: 51rem; // Set the desired width
`;