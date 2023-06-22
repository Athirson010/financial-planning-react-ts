
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { darkTheme } from "./config/theme";
import Login from "./features/login/index";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
