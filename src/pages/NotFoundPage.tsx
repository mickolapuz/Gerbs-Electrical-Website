import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 45%, #FFFFFF 100%)",
    px: 2,
  },

  content: {
    textAlign: "center",
    maxWidth: 680,
    mx: "auto",
    py: { xs: 8, md: 10 },
  },

  errorCode: {
    color: "#22346E",
    fontWeight: 900,
    fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
    lineHeight: 1,
    letterSpacing: "-0.06em",
  },

  title: {
    mt: 2,
    color: "#0F172A",
    fontWeight: 850,
    fontSize: { xs: "1.8rem", md: "2.5rem" },
    lineHeight: 1.2,
  },

  description: {
    mt: 2,
    color: "text.secondary",
    fontSize: { xs: "1rem", md: "1.08rem" },
    lineHeight: 1.8,
  },

  helperText: {
    mt: 2,
    color: "rgba(26,26,26,0.72)",
    fontSize: { xs: "0.95rem", md: "1rem" },
    lineHeight: 1.7,
  },

  buttonWrapper: {
    mt: 4,
    display: "flex",
    justifyContent: "center",
  },

  button: {
    borderRadius: "999px",
    px: 3.5,
    py: 1.25,
    textTransform: "none",
    fontWeight: 800,
    color: "#FFFFFF",
    backgroundColor: "#22346E",
    boxShadow: "0 10px 24px rgba(34,52,110,0.18)",

    "&:hover": {
      backgroundColor: "#1B2A59",
      boxShadow: "0 14px 30px rgba(34,52,110,0.24)",
    },

    "&:focus-visible": {
      outline: "3px solid rgba(34,52,110,0.25)",
      outlineOffset: "4px",
    },
  },
};

const NotFoundPage = () => {
  return (
    <Box component="main" sx={styles.page}>
      <Container maxWidth="md">
        <Box sx={styles.content}>
          <Typography component="p" sx={styles.errorCode}>
            404
          </Typography>

          <Typography component="h1" sx={styles.title}>
            This page could not be found.
          </Typography>

          <Typography component="p" sx={styles.description}>
            The page you are looking for may have been moved, renamed, or is no
            longer available.
          </Typography>

          <Typography component="p" sx={styles.helperText}>
            Looking for a specific product, service, brand, or project
            requirement? Contact our team and we will help you find the right
            solution.
          </Typography>

          <Box sx={styles.buttonWrapper}>
            <Button
              component={RouterLink}
              to="/#contact-us"
              sx={styles.button}
              aria-label="Go to contact us section"
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
