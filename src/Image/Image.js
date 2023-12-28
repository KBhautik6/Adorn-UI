import React from "react";
import { StyledImage } from './Image.styled';
export const Images = ({ src, size, variant }) => {
  return(
    <StyledImage src={src} size={size} shape={variant} />
  );
};