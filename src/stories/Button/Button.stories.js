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
    <Button type="primary" variant="outline" text="Primary Button" outline />
    <Button
      type="secondary"
      variant="outline"
      text="Secondary Button"
      outline
    />
    <Button type="success" variant="outline" text="Successon Button" outline />
    <Button type="warning" variant="outline" text="Warning Button" outline />
  </StyledContainer>
);

// Starting new stories of button name called "Icon_button"

export const IconButton = () => (
  <StyledContainer>
    <Button
      type="primary"
      variant="outline"
      text="Save button"
      outline
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
  <Container>
    <Button
      type="primary"
      variant="container"
      text="Primary link button"
      outline
      border
      hovers
    />
    <Button
      type="secondary"
      variant="container"
      text="Secondary link button"
      outline
      border
      hovers
    />
    <Button
      type="success"
      variant="container"
      text="Succesor link button"
      outline
      border
      hovers
    />
    <Button
      type="warning"
      variant="container"
      text="Warning link button"
      outline
      border
      hovers
    />
  </Container>
);
