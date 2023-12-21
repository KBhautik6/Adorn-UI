import React from "react";
import { Input } from "./Input";
import { StyledContainer } from "./Input.styled";

export default {
  title: "UserInput",
  component: Input,
};

export const UsernameInput = () => (
  <StyledContainer>
    <Input label="Username" type="text" />
    <Input label="Password" type="password" />
  </StyledContainer>
);
