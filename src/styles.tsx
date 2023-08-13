import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  cursor: default; 
  scroll-behavior: smooth !important;
}
`
export const Container = styled.div`
margin: auto;
background-color: #1D3D39;
display: flex;
flex-flow: inherit;
height: 100vh;
place-content: center;
`;
