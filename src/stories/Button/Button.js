import React from "react";
import {
  StyledButtonComponent,
  StyledOutlineButton,
  ButtonText,
} from "./Button.Styled";

export const Button = ({ type, variant, text, icon }) => {
  if (variant === "container") {
    return (
      <StyledButtonComponent type={type}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }

  if (variant === "outline") {
    return (
      <StyledOutlineButton type={type}>
        {icon} {text}
      </StyledOutlineButton>
    );
  }

  if (variant === "text") {
    return <ButtonText type={type}>{text}</ButtonText>;
  }

  return null;
};
