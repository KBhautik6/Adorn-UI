import React from "react";
import { StyledDisplayImage } from "./Avatar.Styled";

export const Avatar = ({ src, size, shape }) => {
  return( 
  <StyledDisplayImage src={src} size={size} shape={shape} />
  );
};
