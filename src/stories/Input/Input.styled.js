import styled from "styled-components";
import theme from "../../theme";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 190px;
`;

export const StyledIconPrefix=styled.div`
  position:absolute;
  left:5px;
  top:50%;
  transform:translateY(-50%);
`

export const StyledIconSuffix=styled.div`
  position:absolute;
  right:5px;
  top:50%;
  transform:translateY(-50%);
`

export const StyledInput=styled.input`
  width:100%;
  width:200px;
  padding:14px 20px;
  border-radius:10px;
  margin:15px 0;
  border:1px solid ${(props)=>props.type==="password" ? theme.primary:"black"};
`

