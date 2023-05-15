import { createGlobalStyle } from 'styled-components';

export const tam = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
  :root {
  --purple: #6930C3;
  --purpleDark: #5423A0;
  --redError:#c50000;
  --whiteBold: #E9ECEF;
  --white: #F8F9FA;  
  --whiteMedium: #e3e3e3;
  --grayBold: #ADB5BD;
  --gray: #CED4DA;
  --grayMedium: #DEE2E6;
  --darkBold: #212529;
  --dark: #343A40;
  --darkMedium: #495057;
  --darkLigthen: #6C757D;
  /* --mobile: 425px;
  --tablet: 768px;
  --telaPequena:1024; */
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  cursor: default;
}`;