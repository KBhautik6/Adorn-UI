import React from "react";
import { Badges } from "./Badges";
import theme from '../../theme'
import { StyledBadgesContainer } from "./Badges.styled";

export default {
  title: "Badges",
  component: Badges,
};

export const BadgesOnAvatar = () => (
  <StyledBadgesContainer>
    <Badges  url="https://i.pravatar.cc/40" size={2.4} />
    <Badges  url="https://i.pravatar.cc/60" size={3.4} />
    <Badges  url="https://i.pravatar.cc/80" size={4.4} />
  </StyledBadgesContainer>
);