import React from "react";
import {
  StyledContainer,
  StyledIconPrefix,
  StyledIconSuffix,
  StyledInput
} from "./Input.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Input = ({ type,id,placehold,prefix,suffix, }) => {
  return (
    <StyledContainer>
      {prefix && (
        <StyledIconPrefix>
          <FontAwesomeIcon icon={prefix} />
        </StyledIconPrefix>
      )}
      <StyledInput type={type} placehold={placehold} id={id}/>
      {suffix && (
        <StyledIconSuffix>
          <FontAwesomeIcon icon={suffix} />
      </StyledIconSuffix>
      )}
    </StyledContainer>
  );
};
