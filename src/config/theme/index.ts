import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    background: { default: "#222222" },
    mode: "dark",
    primary: { main: "#295650" },
    secondary: { main: "#E50914" },
    text: { primary: "#f5f5f1" },
  },
});

export const lightTheme = createTheme({
  palette: {
    background: {},
    mode: "light",
    primary: { main: "#1D3D39" },
    secondary: { main: "#f5f5f1" },
    text: { primary: "#295650" },
  },
});
