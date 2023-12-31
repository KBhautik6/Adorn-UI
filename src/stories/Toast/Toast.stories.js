import { StyledToastContainer } from "./Toast.styled";
import { Toast } from "./Toast";
import React from "react";
export default {
  title: "Toast",
  component: Toast,
};

export const SimpleActionToast = () => {
  return (
    <StyledToastContainer>
      <Toast text="Successful toast for user action." color="success"></Toast>
      <Toast text="Warning toast for user action." color="warning"></Toast>
      <Toast text="danger toast for user action." color="badgeBg"></Toast>
    </StyledToastContainer>
  );
};
