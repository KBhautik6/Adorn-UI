import React from "react";
import { StyledAlert, StyledOutlineAlert } from "./Alert.Styled";

export const Alert = ({colorinput, text, variant }) => {
  if (variant === "contained") {
    return <StyledAlert colorinput={colorinput}>{text}</StyledAlert>;
  }
  if (variant === "outlined") {
    return <StyledOutlineAlert colorinput={colorinput}>{text}</StyledOutlineAlert>;
  }
  return null;
};
