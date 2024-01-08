import React from "react";
import { Input } from "./Input";
import Typography from "../Typography/Typography";
import {StyledInputContainer} from "./Input.styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export default {
  title: "UserInput",
  component: Input,
};

export const UsernameInput = () => (
  <>
  <StyledInputContainer>
    <Typography text="Username *"/>
    <Input type="text" placehold="Enter the name" id="Name" prefix={faUser}/>
    <Typography text="Password*" type="primary"/>
    <Input type="text" placehold="Enter the password" id="Password" suffix={faUser}/>
    <Typography text="Password is incorrect" type="primary"/>
  </StyledInputContainer>
  </>
);
