// Card.stories.js
import React from 'react';
import Card from './Card';
import {StyleContainer} from "./Card.styled"
export default {
  title: 'Card',
  component: Card,
};

export const SimpleTextOnlyCard = () => (
  <StyleContainer>
    <Card
    title="Eren Yeager"
    content="
    Eren Yeager was a former member of the Survey Corps. He was
    the main protagonist of Attack on Titan. He lived in
    Shiganshina District,
  "
  />
  </StyleContainer>
);
