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
    color:${({color})=>theme?.[color]};
    background-color:${theme.white};
    border:2px solid ${({color})=>theme?.[color]};
    padding:15px 50px;
    border-radius:0.4rem;
`
