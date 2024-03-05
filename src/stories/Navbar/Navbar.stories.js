import React from "react";
import Navbar from "./Navbar";
import {
  StyledNavbarSection,
  StyledNavbarContentWrapper,
  StyledNavbarIconWrapper,
  StyledNavbarLinkContainer,
  StyledNavbarUnorderList,
  StyledNavbarLists,
  StyledNavbarListLink,
} from "./Navbar.styled";
import Button from "../Button/Button";
import Badges from "../Badges/Badges";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";

export default {
  title: "Navbar",
  component: Navbar,
};

export const ListNavbar = () => (
  <div>
    <Navbar>
      <StyledNavbarSection>
        <Typography tag="h2" type="primary" text="Adorn Box" />
        <StyledNavbarContentWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input
              type="text"
              placeholder="Search"
              id="Name"
              style={{
                marginRight: "10px",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                width: "200px",
              }}
            />
            <Button type="secondary" variant="outlined" text="Login" />
          </div>
        </StyledNavbarContentWrapper>

        <StyledNavbarIconWrapper>
          <Badges
            size="medium"
            type="cart"
            img="https://adorn-components.netlify.app/assets/images/heartIcon.svg"
            count={12}
          />
          <Badges
            size="medium"
            type="cart"
            img="https://adorn-components.netlify.app/assets/images/cart-outlined.svg"
            count={12}
          />
        </StyledNavbarIconWrapper>

        <StyledNavbarLinkContainer>
          <StyledNavbarUnorderList>
            <StyledNavbarLists>
              <StyledNavbarListLink href="#">Home</StyledNavbarListLink>
            </StyledNavbarLists>
            <StyledNavbarLists>
              <StyledNavbarListLink href="#">About</StyledNavbarListLink>
            </StyledNavbarLists>
            <StyledNavbarLists>
              <StyledNavbarListLink href="#">Contact</StyledNavbarListLink>
            </StyledNavbarLists>
            <StyledNavbarLists>
              <StyledNavbarListLink href="#">Blog</StyledNavbarListLink>
            </StyledNavbarLists>
            <StyledNavbarLists>
              <StyledNavbarListLink href="#">Services</StyledNavbarListLink>
            </StyledNavbarLists>
          </StyledNavbarUnorderList>
        </StyledNavbarLinkContainer>
      </StyledNavbarSection>
    </Navbar>
  </div>
);
