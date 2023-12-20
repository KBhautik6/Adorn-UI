import React from "react";
import { SimpleAlert, OutlineSimpleAlert } from "./Alert";
import { Styledheading } from "./Alert.Styled";

export default {
  title: "Alert",
  component: SimpleAlert,
};

export const Alerts = () => (
  <Styledheading>
    <SimpleAlert type="primary" text="Primary! This is a Primary Alert - Check it now!" />
    <SimpleAlert type="secondary" text="Secondary! This is a Secondary Alert - Check it now!" />
    <SimpleAlert type="success" text="Success! This is a Success Alert - Check it now!" />
    <SimpleAlert type="warning" text="Warning! This is a Warning Alert - Check it now!" />
  </Styledheading>
);

export const OutlineAlerts = () => (
  <Styledheading>
    <OutlineSimpleAlert type="primary" text="Primary! This is a Primary Outline Alert - Check it now!" />
    <OutlineSimpleAlert type="secondary" text="Secondary! This is a Secondary Outline Alert - Check it now!" />
    <OutlineSimpleAlert type="success" text="Success! This is a Success Outline Alert - Check it now!" />
    <OutlineSimpleAlert type="warning" text="Warning! This is a Warning Outline Alert - Check it now!" />
  </Styledheading>
);
