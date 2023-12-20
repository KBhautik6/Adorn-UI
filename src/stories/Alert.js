import React from "react";
import { Alert } from "./Alert.Styled";

export const SimpleAlert = ({
  type,
  text,
  variant,
  isoutline,
  border,
  ishover,
}) => (
  <Alert
    type={type}
    variant={variant}
    isoutline={isoutline}
    border={border}
    ishover={ishover}
  >
    {text}
  </Alert>
);
