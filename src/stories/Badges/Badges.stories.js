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
      url="https://i.pravatar.cc/40"
      size={2.4}
      variant="square"
      colortype="success"
    />
    <Badges
      url="https://i.pravatar.cc/60"
      size={3.4}
      variant="square"
      colortype="warning"
    />
    <Badges
      url="https://i.pravatar.cc/80"
      size={4.4}
      variant="square"
      colortype="success"
    />
  </StyledBadgesContainer>
);

export const BadgesOnIcon = () => {
  <StyledBadgesContainer>
    <Badges
      url="https://i.pravatar.cc/40"
      size={2.4}
      variant="iconBadge"
      colortype="primary"
      text="10"
    />
    <Badges
      url="https://i.pravatar.cc/40"
      size={3.4}
      variant="iconBadge"
      colortype="primary"
      text="12"
    />
    <Badges
      url="https://i.pravatar.cc/40"
      size={4.4}
      variant="iconBadge"
      colortype="primary"
      text="14"
    />
  </StyledBadgesContainer>;
};
