import React from "react";
import { Alert } from "./Alert.Styled";

export const Alert = ({ type, text, variant, isOutLine }) => (
  <Alert type={type} variant={variant} isOutline={isOutLine}>
    {text}
  </Alert>
);
