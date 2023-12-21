import React from "react";
import { StyledImage } from './Image.styled';
export const Images = ({ url, Size, variant }) => {
  return(
    <StyledImage src={url} Size={Size} shape={variant} />
  );
};