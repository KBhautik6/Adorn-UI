import styled from "styled-components";
import theme from "../../theme";

export const StyledNavbarWrapper = styled.div`
  font-family: "Rubik", sans-serif;
`;

export const StyledNavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 237, 237);
  border-radius: 5px;
`;

export const StyledNavbarSection = styled.div`
  background: ${theme.textColor};
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    color: ${theme.primary};
    padding: 0 0 0 18px;
    font-weight: 600;
    font-size: 30px;
    margin: 0 30px 0 0;
    line-height: 35px;
  }
`;

export const StyledNavbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 45.5px;
  max-width: 1000px;
  width: 100%;
`;

export const StyledNavbarContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNavbarSearch = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 200px;
`;

export const StyledNavbarIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNavbarLinkContainer = styled.div`
  margin: 0;
`;

export const StyledNavbarUnorderList = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;

export const StyledNavbarLists = styled.li`
  padding: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: ${theme.textColor};
  }
`;

export const StyledNavbarListLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${theme.secondary};

  &:hover {
    color: ${theme.primary};
  }
`;
