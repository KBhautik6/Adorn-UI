import React from "react";
import {
  StyledNavbarWrapper,
  StyeldxNavbarInnerWrapper,
} from "./Navbar.styled";

const Navbar = ({ title, children }) => {
  return (
    <StyledNavbarWrapper>
      <StyeldxNavbarInnerWrapper>
        {title && <h2>{title}</h2>}
        {children}
      </StyeldxNavbarInnerWrapper>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
