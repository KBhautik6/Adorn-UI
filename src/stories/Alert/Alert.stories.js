import React from "react";
import { SimpleAlert } from "./Alert";
import { StyledHeading } from "./Alert.Styled";

export default {
  title: "Alert",
  component: SimpleAlert,
};

export const Alerts = () => (
  <StyledHeading>
    <SimpleAlert
      type="primary"
      variant="contained"
      text="Primary! This is a Primary Alert - Check it now!"
    />
    <SimpleAlert
      type="secondary"
      variant="contained"
      text="Secondary! This is a Secondary Alert - Check it now!"
    />
    <SimpleAlert
      type="success"
      text="Success! This is a Success Alert - Check it now!"
    />
    <SimpleAlert
      type="warning"
      variant="contained"
      text="Warning! This is a Warning Alert - Check it now!"
    />
  </StyledHeading>
);

export const OutlineAlerts = () => (
  <Styledheading>
    <SimpleAlert
      type="primary"
      variant="outlined"
      text="Primary! This is a Primary Outline Alert - Check it now!"
      isoutline
    />
    <SimpleAlert
      type="secondary"
      text="Secondary! This is a Secondary Outline Alert - Check it now!"
      isoutline
    />
    <SimpleAlert
      type="success"
      text="Success! This is a Success Outline Alert - Check it now!"
      isoutline
    />
    <SimpleAlert
      type="warning"
      text="Warning! This is a Warning Outline Alert - Check it now!"
      isoutline
    />
  </Styledheading>
);
