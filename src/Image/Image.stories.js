import React from "react";
import { Images } from "./Image";
import { StyledImageContainer } from "./Image.styled"
export default {
  title: "Image",
  component: Images,
};
export const Squareimages = () => (
  <StyledImageContainer>
    <Images url="https://picsum.photos/350/350/?blur" Size={13.4} variant="square" />
    <Images url="https://picsum.photos/350/351/?blur" Size={13.4} variant="square" />
  </StyledImageContainer>
);
export const Circularimages = () => (
  <StyledImageContainer>
    <Images url="https://picsum.photos/349/349/?blur" Size={13.4} variant="circle" />
    <Images url="https://picsum.photos/351/351/?blur" Size={13.4} variant="circle" />
  </StyledImageContainer>
);
