import React from "react";
import { Typography } from "./Typography";
import { StyledHeading } from "./Typography.Styled";

export default {
  title: "Typography",
  component: Typography,
};

export const Headings = () => (
  <StyledHeading>
    <Typography tag="h1" text="H1. Adorn Box Heading" />
    <Typography tag="h2" text="H2. Adorn Box Heading" />
    <Typography tag="h3" text="H3. Adorn Box Heading" />
    <Typography tag="h4" text="H4. Adorn Box Heading" />
    <Typography tag="h5" text="H5. Adorn Box Heading" />
    <Typography tag="h6" text="H6. Adorn Box Heading" />
  </StyledHeading>
);

export const FontColor = () => {
  <StyledHeading>
    <Typography
      tag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      tag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      tag="p"
      text="Adorn Box text with sucesses color"
      type="success"
    />
    <Typography tag="p" text="Adorn Box text with danger color" type="danger" />
    <Typography
      tag="p"
      text="Adorn Box text with warning color"
      type="warning"
    />
  </StyledHeading>;
};
