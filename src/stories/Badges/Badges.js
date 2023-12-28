import React from "react";
import {
  StyledImageContainer,
  StyledAvatarImage,
  StyledBadgeIcon,
  StyledImager,
  StyledIconImageBadge,
  StyledBadgesIcon,
} from "./Badges.styled";

export const Badges = ({ src, size, varaint, color, text }) => {
  if (varaint === "square") {
    return (
      <StyledImageContainer>
        <StyledAvatarImage src={src} size={size} />
        <StyledBadgeIcon color={color}>{text}</StyledBadgeIcon>
      </StyledImageContainer>
    );
  }

  if (varaint === "iconbadges") {
    return (
      <StyledImager>
        <StyledIconImageBadge size={size} src={src} />
        <StyledBadgesIcon color={color}>{text}</StyledBadgesIcon>
      </StyledImager>
    );
  }
  return null;
};
