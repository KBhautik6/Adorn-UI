import React from 'react'
import {StyledText} from "./Toast.styled"

export const Toast=({text,color}) =>{
  return (
    <StyledText color={color}>
    {text}</StyledText>
  
  );
};

