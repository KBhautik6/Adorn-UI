import React from "react";
import { StyledDisplayImage, StyledBadgeIcon } from "./Badges.styled";

export const Badges = ({ url, size }) => {
  return (
        <StyledDisplayImage src={url} size={size}  />
  );
};