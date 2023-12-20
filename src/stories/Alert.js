
import React from "react";
import { Alert, OutlineAlert} from "./Alert.Styled";

export const SimpleAlert = ({ type, text }) => (
  <Alert type={type}>
    {text}
  </Alert>
);

export const OutlineSimpleAlert = ({ variant, text }) => (
  <OutlineAlert type={type}>
    {text}
  </OutlineAlert>
);

