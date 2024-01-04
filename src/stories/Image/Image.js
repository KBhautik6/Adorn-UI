import React from "react";
import { StyledImage } from "./Image.styled";
export const Image = ({ src, size, variant }) => {
  return <StyledImage src={src} size={size} shape={variant} />;
};
