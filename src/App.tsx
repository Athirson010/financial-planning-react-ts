
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { lightTheme } from "./config/theme";
import Login from "./features/login/index";
import { GlobalStyles } from "./styles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ToastContainer/>
      <GlobalStyles/>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
