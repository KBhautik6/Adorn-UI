import React from "react";
import { StyledAlert, StyledOutlineAlert } from "./Alert.Styled";

export const Alert = ({ color, text, variant }) => {
  if (variant === "contained") {
    return <StyledAlert color={color}>{text}</StyledAlert>;
  }
  if (variant === "outlined") {
    return <StyledOutlineAlert color={color}>{text}</StyledOutlineAlert>;
  }
  return null;
};
