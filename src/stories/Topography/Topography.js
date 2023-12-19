import React from "react";
import { Textcontent } from "./Topography.Styled";

export const Typography = ({ tag, text, type }) => {
  return <Textcontent as={tag} type={type}>{text}</Textcontent>;
};
