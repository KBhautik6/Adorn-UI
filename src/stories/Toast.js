import React from 'react'
import {StyledText} from "./Toast.styled"

export const Toast=({text,colortype}) =>{
  return (
    <StyledText colortype={colortype}>
    {text}</StyledText>
  
  );
};

