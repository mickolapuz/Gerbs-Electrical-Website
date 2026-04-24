import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./themes/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
