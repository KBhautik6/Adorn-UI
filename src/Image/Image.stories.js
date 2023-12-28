import React from "react";
import { Images } from "./Image";
import { StyledImageContainer } from "./Image.styled"
export default {
  title: "Image",
  component: Images,
};
export const Squareimages = () => (
  <StyledImageContainer>
    <Images src="https://picsum.photos/350/350/?blur"  variant="square" />
    <Images src="https://picsum.photos/350/351/?blur"  variant="square" />
  </StyledImageContainer>
);
export const Circularimages = () => (
  <StyledImageContainer>
    <Images src="https://picsum.photos/349/349/?blur"  variant="circle" />
    <Images src="https://picsum.photos/351/351/?blur"  variant="circle" />
  </StyledImageContainer>
);

export const ResponsiveImage=()=>{
  <StyledImageContainer>
    <Image src="https://i.pravatar.cc/" shape="responsive"/>
  </StyledImageContainer>
}
