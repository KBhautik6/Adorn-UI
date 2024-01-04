import React from "react";
import { Input } from "./Input";

export default {
  title: "UserInput",
  component: Input,
};

export const UsernameInput = () => (
  <>
    <Input label="Username" type="text" />
    <Input label="Password" type="text" />
  </>
);
