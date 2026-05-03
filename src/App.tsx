import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./themes/Theme";
import MainPage from "./pages/MainPage";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarWrapper />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
