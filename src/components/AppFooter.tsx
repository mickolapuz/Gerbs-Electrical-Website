import { Box, Typography } from "@mui/material";

const styles = {
  footer: {
    width: "100%",
    py: 3,
    px: { xs: 2, sm: 3 },
    borderTop: "1px solid rgba(34, 52, 110, 0.12)",
    backgroundColor: "background.paper",
  },
  content: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: 0.5, sm: 1 },
    textAlign: "center",
  },
  text: {
    color: "text.secondary",
    fontSize: { xs: "0.8rem", sm: "0.875rem" },
    lineHeight: 1.6,
  },
};

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={styles.footer}>
      <Box sx={styles.content}>
        <Typography component="p" sx={styles.text}>
          © Gerb&apos;s Electrical Trading and Services {currentYear}.
        </Typography>

        <Typography component="p" sx={styles.text}>
          All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default AppFooter;
