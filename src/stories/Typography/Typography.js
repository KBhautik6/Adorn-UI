import React from "react";
import { TextContent } from "./Typography.Styled";

export const Typography = ({ tag, text, type }) => {
  return (
    <TextContent as={tag} type={type}>
      {text}
    </TextContent>
  );
};
