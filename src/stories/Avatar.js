import React from "react";
import { DisplayImage } from "./Avatar.Styled";

export const Avatar = ({ src, size, shape }) => {
  return( 
  <DisplayImage src={src} size={size} shape={shape} />
  );
};
