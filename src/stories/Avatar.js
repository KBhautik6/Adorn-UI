import React from "react";
import { DisplayImage } from "./Avatar.Styled";

export const Avatar = ({ url, Size, variant }) => {
  return <DisplayImage src={url} Size={Size} shape={variant} />;
};
