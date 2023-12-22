import React from "react";
import { Button } from "./Button";
import { FaSave } from "react-icons/fa";
import { StyledContainer } from "./Button.Styled";

export default {
  title: "Button",
  component: Button,
};

// Starting new stories of button name called "Container Button"

export const ContainedButton = () => (
  <StyledContainer>
    <Button type="primary" variant="container" text="Primary Button" />
    <Button type="secondary" variant="container" text="Secondary Button" />
    <Button type="success" variant="container" text="Sucesson Button" />
    <Button type="warning" variant="container" text="Warning Button" />
  </StyledContainer>
);

// Starting new stories of button name caled "outline floating button"

export const OutlineFloatingButton = () => (
  <StyledContainer>
    <Button type="primary" variant="outline" text="Primary Button" />
    <Button type="primary" variant="outline" text="Primary Button" />
    <Button type="success" variant="outline" text="Successon Button" />
    <Button type="warning" variant="outline" text="Warning Button" />
  </StyledContainer>
);

// Starting new stories of button name called "Icon_button"

export const IconButton = () => (
  <StyledContainer>
    <Button
      type="primary"
      variant="outline"
      text="Save button"
      icon={<FaSave />}
    />
    <Button
      type="primary"
      variant="outline"
      text="Save button"
      icon={<FaSave />}
    />
  </StyledContainer>
);

// Starting new stories of button name called "Text"

export const Text = () => (
  <StyledContainer>
    <Button type="primary" variant="TextButton" text="Primary link button" />
    <Button
      type="secondary"
      variant="TextButton"
      text="Secondary link button"
    />
    <Button type="success" variant="TextButton" text="Succesor link button" />
    <Button type="warning" variant="TextButton" text="Warning link button" />
  </StyledContainer>
);
