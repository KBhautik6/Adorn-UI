// Card.stories.js
import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const SimpleTextOnlyCard = () => (
  <Card variant="SimpleTextCard" title="Eren Yeager" content="Eren Yeager was a former member of the Survey Corps. He was the main protagonist of Attack on Titan. He lived in Shiganshina District,"/>
);

export const CardWithBadges=()=>(
  <Card variant="CardWithBadges"
   BadgeText="The Traning"
    src="https://i.pravatar.cc/40" 
    title="Survey Corps" 
    content="In the year 847, Eren, Mikasa Ackerman, and Armin Arlert joined the 104th Training Corps. The three graduated with Eren ranking 5th best, and they joined the Survey Corps following the battle of Trost District"/>
);

export const CardWithDissMiss = () => (
  <Card
    BadgeText="X"
    src="https://i.pravatar.cc/40"
    variant="CardsWithDissMiss" 
    title="Survey Corps story"
    content="Rs. 150"
    checkouttext="checkout"
  />
);

export const CardsWithTextOverlaping=()=>(
  <Card BadgeText="X"
  src="https://i.pravatar.cc/40"
  variant="CardsWithTextOverlaying"
  title="Survey Corps Story"
  content="Rs.250"
  checkouttext="Out of Stock"
  outofStock="Out of Stock"
  />
)

export const HorizontalCard=()=>(
 <Card
  src="https://i.pravatar.cc/40"
  variant="HorizontalCard"
  title="Founding Titan"
  content="Despite having the ability to control the Titans, no Founding Titan of royal blood after the Great Titan War expressed any desire to get rid of the Titans outside the Walls, even if the inheritor had expressed that desire previously"
  checkouttext="Read More"
 />

);