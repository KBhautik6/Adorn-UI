import React from "react";
import {
  StyledButtonComponent,
  StyledOutlineButton,
  ButtonText,
} from "./Button.Styled";

export const Button = ({ type, variant, text, icon }) => {
  if (variant === "container") {
    return (
      <StyledButtonComponent colorinput={type}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }

  if (variant === "outline") {
    return (
      <StyledOutlineButton colorinput={type}>
        {icon} {text}
      </StyledOutlineButton>
    );
  }

  if (variant === "TextButton") {
    return <ButtonText colorinput={type}>{text}</ButtonText>;
  }

  return null;
};
