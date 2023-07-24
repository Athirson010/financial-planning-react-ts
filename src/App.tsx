
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { lightTheme } from "./config/theme";
import Login from "./features/login/index";
import { GlobalStyles } from "./style";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
