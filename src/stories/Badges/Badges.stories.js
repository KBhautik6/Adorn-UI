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
      size={2.4}
      variant="square"
      color="success"
    />
    <Badges
      src="https://i.pravatar.cc/60"
      size={3.4}
      variant="square"
      color="warning"
    />
    <Badges
      src="https://i.pravatar.cc/80"
      size={4.4}
      variant="square"
      color="success"
    />
  </StyledBadgesContainer>
);

export const BadgesOnIcon = () => {
  <StyledBadgesContainer>
    <Badges
      src="https://i.pravatar.cc/40"
      size={2.4}
      variant="iconBadge"
      color="primary"
      text="10"
    />
    <Badges
      src="https://i.pravatar.cc/40"
      size={3.4}
      variant="iconBadge"
      color="primary"
      text="12"
    />
    <Badges
      src="https://i.pravatar.cc/40"
      size={4.4}
      variant="iconBadge"
      color="primary"
      text="14"
    />
  </StyledBadgesContainer>;
};
