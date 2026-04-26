import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: `"Helvetica World", "Helvetica", "Arial", sans-serif`,

    htmlFontSize: 16,

    h1: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.45,
    },

    body1: {
      fontFamily: `"Helvetica World", "Helvetica", "Arial", sans-serif`,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: `"Open Sans", sans-serif`,
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },

    button: {
      fontFamily: `"Inter", sans-serif`,
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.02em",
    },

    caption: {
      fontFamily: `"Open Sans", sans-serif`,
      fontSize: "0.75rem",
      lineHeight: 1.4,
    },

    overline: {
      fontFamily: `"Open Sans", sans-serif`,
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },

    subtitle1: {
      fontFamily: `"Helvetica World", "Helvetica", "Arial", sans-serif`,
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: `"Open Sans", sans-serif`,
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 12,
  },

  palette: {
    mode: "light",
    primary: {
      main: "#22346E",
    },
    secondary: {
      main: "#D71F36",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#555",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          padding: "10px 22px",
          boxShadow: "none",
          textTransform: "none",
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "#22346E",
            color: "#FFFFFF",

            "&:hover": {
              backgroundColor: "#182653",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundColor: "#EEF3FB",
            color: "#22346E",
            border: "1px solid #D6E0F5",
            boxShadow: "none",

            "&:hover": {
              backgroundColor: "rgba(34, 52, 110, 0.10)",
              borderColor: "rgba(34, 52, 110, 0.24)",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#22346E",
            color: "#22346E",

            "&:hover": {
              borderColor: "#182653",
              backgroundColor: "#EAF0FF",
            },
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            borderColor: "#6B7280",
            color: "#4B5563",

            "&:hover": {
              borderColor: "#4B5563",
              backgroundColor: "#F3F4F6",
            },
          },
        },
      ],
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `"Helvetica World", "Helvetica", "Arial", sans-serif`,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
