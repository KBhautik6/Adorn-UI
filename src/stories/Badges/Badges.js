import React from "react";
import {
  StyledImageContainer,
  StyledAvatarImage,
  StyledBadgeIcon,
  StyledImager,
  StyledIconImageBadge,
  StyledBadgesIcon,
} from "./Badges.styled";

export const Badges = ({ url, size, varaint, colortype, text }) => {
  if (varaint === "square") {
    return (
      <StyledImageContainer>
        <StyledAvatarImage src={url} size={size} />
        <StyledBadgeIcon colortype={colortype}>{text}</StyledBadgeIcon>
      </StyledImageContainer>
    );
  }

  if (varaint === "iconbadges") {
    return (
      <StyledImager>
        <StyledIconImageBadge size={size} src={url} />
        <StyledBadgesIcon colortype={colortype}>{text}</StyledBadgesIcon>
      </StyledImager>
    );
  }
  return null;
};
