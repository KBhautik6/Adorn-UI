import React from "react";
import { StyledButtonComponent } from "./Button.Styled";

export const Button = ({
  type,
  variant,
  text,
  hover,
  icon,
  border,
  outline,
  hovers,
}) => {
  return (
    <>
      <StyledButtonComponent
        type={type}
        variant={variant}
        outline={outline}
        border={border}
        hovers={hovers}
      >
        {icon}
        {text}
      </StyledButtonComponent>
    </>
  );
};
