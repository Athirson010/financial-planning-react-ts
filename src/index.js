import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './style/global';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,

);