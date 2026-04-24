import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./themes/Theme";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
