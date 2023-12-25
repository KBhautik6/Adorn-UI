import styled from "styled-components";
import theme from "../theme"

export const StyledToastContainer=styled.div`
    display:flex;
    gap:1rem;
    background-color:${theme.offwhite};
    justify-content:center;
    flex-wrap:wrap;
`
export const StyledText=styled.p`
    color:${({colortype})=>theme?.[colortype]};
    background-color:${theme.white};
    border:2px solid;
    border-color:${({colortype})=>theme?.[colortype]};
    padding:15px 50px;
    border-radius:0.4rem;
`
