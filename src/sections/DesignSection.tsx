import { Box, Container, Typography, type Theme } from "@mui/material";

import DesignPicture from "../assets/Services/Design.jpg";

interface DesignItem {
  id: number;
  description: string;
  children: string[];
}

const design: DesignItem = {
  id: 1,
  description:
    "Gerb’s Electrical Trading and Services delivers complete architectural and engineering design solutions with signed and sealed plans by licensed professionals. From concept to detailed drawings, we ensure code-compliant, efficient, and build-ready designs for residential, commercial, and industrial projects.",
  children: [
    "Professional Sign and Seal Services (Architectural and Engineering)",
    "Architectural Design",
    "Electrical Design",
    "Auxiliary Design",
    "FDAS Design",
    "Mechanical Design",
  ],
};

const styles = {
  container: (theme: Theme) => ({
    width: "100%",
    pb: { xs: 8, md: 12 },
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
  }),

  card: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
    alignItems: "stretch",
    borderRadius: { xs: 4, md: 5 },
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.14)",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    textAlign: "left",
  },

  content: {
    p: { xs: 3, sm: 4, md: 6 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  imageWrapper: {
    minHeight: { xs: 260, sm: 340, md: 520 },
    height: "100%",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  overline: {
    color: "secondary.main",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    mb: 1,
  },

  title: {
    color: "common.white",
    fontWeight: 800,
    fontSize: { xs: "1.7rem", md: "2.6rem" },
    lineHeight: 1.15,
    mb: 2,
    maxWidth: "620px",
  },

  description: {
    color: "rgba(255,255,255,0.78)",
    fontSize: { xs: "0.95rem", md: "1.05rem" },
    lineHeight: 1.8,
    mb: 3,
    maxWidth: "650px",
  },

  list: {
    m: 0,
    p: 0,
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: { xs: 1.4, md: 1.7 },
  },

  listItem: {
    position: "relative",
    pl: 3,
    color: "rgba(255,255,255,0.88)",
    fontSize: { xs: "0.92rem", md: "0.98rem" },
    lineHeight: 1.6,

    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "0.72em",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "secondary.main",
    },
  },
};

const DesignSection = () => {
  return (
    <Box
      component="section"
      aria-labelledby="design-heading"
      sx={styles.container}
      id="design"
    >
      <Container maxWidth="lg">
        <Box component="article" sx={styles.card}>
          <Box sx={styles.content}>
            <Typography component="p" sx={styles.overline}>
              Design Services
            </Typography>

            <Typography component="h2" id="design-heading" sx={styles.title}>
              Architectural and Engineering Design Solutions
            </Typography>

            <Typography component="p" sx={styles.description}>
              {design.description}
            </Typography>

            <Box component="ul" sx={styles.list}>
              {design.children.map((item) => (
                <Typography key={item} component="li" sx={styles.listItem}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={styles.imageWrapper}>
            <Box
              component="img"
              src={DesignPicture}
              alt="Architectural and engineering design planning services"
              loading="lazy"
              sx={styles.image}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DesignSection;
