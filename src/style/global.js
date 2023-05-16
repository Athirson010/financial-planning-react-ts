import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const tam = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
  :root {
  --greenBackground: #295650;
  --redError:#c50000;
  --gray: #CED4DA;
  --grayMedium: #DEE2E6;
  --darkBold: #212529;
  --dark: #343A40;
  --darkMedium: #495057;
  --darkLigthen: #6C757D;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  cursor: default;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}
`;

export const Layout = styled.div`
background: #1D3D39;
width: 100%;
height: 100vh;
`;

export const Linha = styled.div`
    align-items: center;
    border-bottom: 1px solid #dadde1;
    display: flex;
    margin: 20px 16px;
    text-align: center;
`