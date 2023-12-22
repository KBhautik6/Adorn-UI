import React from 'react';
import { StyledCard } from './Card.styled';

const Card = ({ title, content }) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;