import React from "react";
import { Alert } from "./Alert";
import { StyledHeading } from "./Alert.Styled";

export default {
  title: "Alert",
  component: Alert,
};

export const Alerts = () => (
  <StyledHeading>
    <Alert
      colorinput="primary"
      variant="contained"
      text="Primary! This is a Primary Alert - Check it now!"
    />
    <Alert
      colorinput="secondary"
      variant="contained"
      text="Secondary! This is a Secondary Alert - Check it now!"
    />
    <Alert
      colorinput="success"
      variant="contained"
      text="Success! This is a Success Alert - Check it now!"
    />
    <Alert
      colorinput="warning"
      variant="contained"
      text="Warning! This is a Warning Alert - Check it now!"
    />
  </StyledHeading>
);

export const OutlineAlerts = () => (
  <StyledHeading>
    <Alert
      colorinput="primary"
      variant="outlined"
      text="Primary! This is a Primary Outline Alert - Check it now!"
    />
    <Alert
      colorinput="secondary"
      variant="outlined"
      text="Secondary! This is a Secondary Outline Alert - Check it now!"
    />
    <Alert
      colorinput="success"
      variant="outlined"
      text="Success! This is a Success Outline Alert - Check it now!"
    />
    <Alert
      colorinput="warning"
      variant="outlined"
      text="Warning! This is a Warning Outline Alert - Check it now!"
    />
  </StyledHeading>
);
