import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./themes/Theme";
import MainPage from "./pages/MainPage";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import AppFooter from "./components/AppFooter";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarWrapper />
      <MainPage />
      <AppFooter />
    </ThemeProvider>
  );
};

export default App;
