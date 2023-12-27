import React from "react";
import { Avatar } from "./Avatar";
import { StyledAvatarContainer } from "./Avatar.styled";

export default {
  title: "Avatar",
  component: Avatar,
};

export const SquareProfile = () => (
  <StyledAvatarContainer>
    <Avatar src="https://i.pravatar.cc/40" size="small" shape="square" />
    <Avatar src="https://i.pravatar.cc/60" size="medium" shape="square" />
    <Avatar src="https://i.pravatar.cc/80" size="large" shape="square" />
  </StyledAvatarContainer>
);

export const CircularProfileAvatar = () => (
  <StyledAvatarContainer>
    <Avatar src="https://i.pravatar.cc/40" size="small" shape="circle" />
    <Avatar src="https://i.pravatar.cc/60" size="medium" shape="circle" />
    <Avatar src="https://i.pravatar.cc/80" size="large" shape="circle" />
  </StyledAvatarContainer>
);
