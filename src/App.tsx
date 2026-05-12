import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router/dom";

import theme from "./themes/Theme";
import router from "./routes/router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
