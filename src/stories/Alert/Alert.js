/* eslint-disable react/prop-types */
import React from "react";
import { StyledAlert, StyledOutlineAlert } from "./Alert.Styled";

export const Alert = ({ type, text, variant }) => {
  if (variant === "contained") {
    return <StyledAlert type={type}>{text}</StyledAlert>;
  }
  if (variant === "outlined") {
    return <StyledOutlineAlert type={type}>{text}</StyledOutlineAlert>;
  }
  return null;
};
