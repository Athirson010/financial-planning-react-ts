import { AppBar, Box, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { useAppTheme } from "../hooks/useAppTheme";
import { Header } from "./Header";

const drawerWidth = 240;

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTheme, toggleCurrentTheme] = useAppTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Header
            handleDrawerToggle={handleDrawerToggle}
            toggle={toggleCurrentTheme}
            theme={currentTheme.palette.mode === "dark" ? "dark" : "light"}
          />
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
