import React from 'react';
import { StyledCardBox,StyledCardParagraph, StyledCardTitle, StyledOutlineButton, StyledBadgesText, StyledBadgesmallImage, StyledDissMissBadges, StyledBadgesMiddleText, StyledHorizontalCard, StyleContainer } from './Card.styled';

export const Card = ({ title, content, variant, src, Badgetext, checkouttext, outofstock }) => {
  if (variant === "SimpleTextCard") {
    return (
      <StyleContainer>
        <StyledCardBox>
          <div>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardParagraph>{content}</StyledCardParagraph>
          </div>
        </StyledCardBox>
      </StyleContainer>
    );
  }

  if (variant === "CardWithBadges") {
    return (
      <StyleContainer>
        <StyledCardBox>
          <StyledBadgesText>{Badgetext}</StyledBadgesText>
          <StyledBadgesmallImage src={src} alt={alt} />
          <div>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardParagraph>{content}</StyledCardParagraph>
          </div>
        </StyledCardBox>
      </StyleContainer>
    );
  }

  if (variant === "CardsWithDissmiss") {
    return (
      <StyleContainer>
        <StyledCardBox>
          <StyledDissMissBadges>{Badgetext}</StyledDissMissBadges>
          <StyledBadgesmallImage src={src} alt={alt} />
          <div>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardParagraph>{content}</StyledCardParagraph>
            <StyledOutlineButton>{checkouttext}</StyledOutlineButton>
          </div>
        </StyledCardBox>
      </StyleContainer>
    );
  }

  if (variant === "CardsWithTextOverlaying") {
    return (
      <StyleContainer>
        <StyledCardBox>
          <StyledDissMissBadges>{Badgetext}</StyledDissMissBadges>
          <StyledBadgesmallImage src={src} alt={alt} />
          <StyledBadgesMiddleText>{outofstock}</StyledBadgesMiddleText>
          <div>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardParagraph>{content}</StyledCardParagraph>
            <StyledOutlineButton>{checkouttext}</StyledOutlineButton>
          </div>
        </StyledCardBox>
      </StyleContainer>
    );
  }

  if (variant === "HorizontalCard") {
    return (
      <StyleContainer>
        <StyledHorizontalCard>
          <StyledBadgesmallImage src={src} alt={alt} />
          <div>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardParagraph>{content}</StyledCardParagraph>
            <StyledOutlineButton>{checkouttext}</StyledOutlineButton>
          </div>
        </StyledHorizontalCard>
      </StyleContainer>
    );
  }
};
