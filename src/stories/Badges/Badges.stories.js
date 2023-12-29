import React from "react";
import { Badges } from "./Badges";
import { StyledBadgesContainer } from "./Badges.styled";

export default {
  title: "Badges",
  component: Badges,
};

export const BadgesOnAvatar = () => (
  <StyledBadgesContainer>
    <Badges
      src="https://i.pravatar.cc/40"
      size="small"
      variant="square"
      color="success"
    />
    <Badges
      src="https://i.pravatar.cc/60"
      size="medium"
      variant="square"
      color="warning"
    />
    <Badges
      src="https://i.pravatar.cc/80"
      size="large"
      variant="square"
      color="success"
    />
  </StyledBadgesContainer>
);

export const BadgesOnIcon = () => {
  <StyledBadgesContainer>
    <Badges
      src="https://i.pravatar.cc/40"
      size="small"
      variant="iconBadge"
      color="primary"
      text="10"
    />
    <Badges
      src="https://i.pravatar.cc/40"
      size="medium"
      variant="iconBadge"
      color="primary"
      text="12"
    />
    <Badges
      src="https://i.pravatar.cc/40"
      size="large"
      variant="iconBadge"
      color="primary"
      text="14"
    />
  </StyledBadgesContainer>;
};
