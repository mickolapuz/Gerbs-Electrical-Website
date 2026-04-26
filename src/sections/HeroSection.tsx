import { Grid, Box, Container, Typography } from "@mui/material";

import Hero1 from "../assets/HeroSection/Hero1.jpg";
import Hero2 from "../assets/HeroSection/Hero2.jpg";
import Hero5 from "../assets/HeroSection/Hero5.jpeg";
import Hero6 from "../assets/HeroSection/Hero6.jpeg";
import AppButton from "../components/AppButton";

const commonImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: { xs: 1, md: 2 },
};

const styles = {
  container: {
    width: "100%",
    textAlign: "center",
    height: "100vh",
    display: { xs: "initial", lg: "flex" },
  },

  contentsContainer: {
    gap: { xs: 0.2, md: 0 },
    position: "relative",
    height: { xs: "50vh", md: "100vh" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/gerbs-colored-icon.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: {
        xs: "clamp(320px, 88vw, 500px)",
        sm: "clamp(420px, 78vw, 620px)",
        md: "720px",
      },
      opacity: 0.07,
    },
  },
  tagline: {
    fontSize: { md: "1.8rem" },
    fontWeight: 700,
    lineHeight: 1.2,
    maxWidth: 700,
    textAlign: "center",
    mt: 1,
  },
  overline: {
    color: "text.secondary",
    letterSpacing: 2,
    fontWeight: 600,
  },
  buttonsContainer: {
    mt: { xs: 3, md: 5 },
    gap: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  picturesContainer: {
    height: { xs: "auto", lg: "100vh" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: { xs: 4, lg: 0 },
  },

  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: {
      xs: "repeat(7, 70px)",
      md: "repeat(8, 70px)",
    },
    gap: 2,
    width: "100%",
    maxWidth: 720,
  },

  hero2: {
    ...commonImage,
    gridColumn: "1 / 5",
    gridRow: {
      xs: "1 / 4",
      md: "1 / 5",
    },
  },

  hero5: {
    ...commonImage,
    gridColumn: "1 / 3",
    gridRow: {
      xs: "4 / 8",
      md: "5 / 9",
    },
  },

  hero1: {
    ...commonImage,
    gridColumn: "3 / 5",
    gridRow: {
      xs: "4 / 6",
      md: "5 / 7",
    },
    objectPosition: "center 30%",
  },

  hero6: {
    ...commonImage,
    gridColumn: "3 / 5",
    gridRow: {
      xs: "6 / 8",
      md: "7 / 9",
    },
  },
};

const HeroSection = () => {
  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg" sx={styles.contentsContainer}>
        <Typography id="hero-title" component="h1" variant="h1" color="primary">
          Gerb&apos;s Electrical Trading and Services
        </Typography>
        <Typography
          component="p"
          variant="body1"
          color="secondary"
          sx={styles.tagline}
        >
          Built on Precision. Powered by Trust.
        </Typography>
        <Typography component="p" variant="overline" sx={styles.overline}>
          Design. Construct. Estimate. Supply.
        </Typography>
        <Grid container sx={styles.buttonsContainer}>
          <AppButton
            label="Request Quote"
            variant="contained"
            color="primary"
            onClick={() => console.log("Request Quote")}
          />
          <AppButton
            label="Download Company Profile"
            variant="contained"
            color="secondary"
            onClick={() => console.log("Download Company Profile")}
          />
        </Grid>
      </Container>
      <Container sx={styles.picturesContainer}>
        <Box sx={styles.imageGrid}>
          <Box
            component="img"
            src={Hero2}
            alt="Electrical warehouse and product storage for Gerbs Electrical Trading and Services"
            loading="eager"
            sx={styles.hero2}
          />

          <Box
            component="img"
            src={Hero5}
            alt="Electrical conduit installation work in progress"
            loading="lazy"
            sx={styles.hero5}
          />

          <Box
            component="img"
            src={Hero1}
            alt="Electrical service equipment and panel installation"
            loading="lazy"
            sx={styles.hero1}
          />

          <Box
            component="img"
            src={Hero6}
            alt="Electrical panel inspection and installation service"
            loading="lazy"
            sx={styles.hero6}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
