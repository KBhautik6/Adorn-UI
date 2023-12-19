import React from "react";
import { Typography } from "./Topography";
import { Styledheading } from "./Topography.Styled";

export default {
  title: "Topography",
  component: Typography,
};

export const Headings = () => (
  <Styledheading>
    <Typography tag="h1" text="H1. Adorn Box Heading" />
    <Typography tag="h2" text="H2. Adorn Box Heading" />
    <Typography tag="h3" text="H3. Adorn Box Heading" />
    <Typography tag="h4" text="H4. Adorn Box Heading" />
    <Typography tag="h5" text="H5. Adorn Box Heading" />
    <Typography tag="h6" text="H6. Adorn Box Heading" />
  </Styledheading>
);


export const FontColor=()=>{
    <Styledheading>
        <Typography tag="p" text="Adorn Box text with primary color" type="primary"/>
        <Typography tag="p" text="Adorn Box text with primary color" type="primary"/>
        <Typography tag="p" text="Adorn Box text with sucesses color" type="success"/>
        <Typography tag="p" text="Adorn Box text with danger color" type="danger"/>
        <Typography tag="p" text="Adorn Box text with warning color" type="warning"/>    
    </Styledheading>
}