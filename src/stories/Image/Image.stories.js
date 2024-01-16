import React from "react";
import { Image } from "./Image";
import { StyledImageContainer } from "./Image.styled";

export default {
  title: "Image",
  component: Image,
};

export const Squareimages = () => (
  <StyledImageContainer>
    <Image src="https://picsum.photos/350/350/?blur" variant="square" />
    <Image src="https://picsum.photos/350/351/?blur" variant="square" />
  </StyledImageContainer>
);

export const Circularimages = () => (
  <StyledImageContainer>
    <Image src="https://picsum.photos/349/349/?blur" variant="circle" />
    <Image src="https://picsum.photos/351/351/?blur" variant="circle" />
  </StyledImageContainer>
);

export const ResponsiveImage = () => {
  <StyledImageContainer>
    <Image src="https://i.pravatar.cc/" variant="fullscreen" />
  </StyledImageContainer>;
};
