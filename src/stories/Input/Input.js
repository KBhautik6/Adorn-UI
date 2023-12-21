import React from "react";
import {
  StyledContainer,
  StyledInputLabel,
  StyledUserInput,
} from "./Input.styled";

export const Input = ({ label, type }) => {
  return (
    <StyledContainer>
      <StyledInputLabel label={label}>{label}</StyledInputLabel>
      <StyledUserInput type={type} />
      {label === "Password" && <div style={{color:'red'}} >*Password is incorrect</div>}
    </StyledContainer>
  );
}