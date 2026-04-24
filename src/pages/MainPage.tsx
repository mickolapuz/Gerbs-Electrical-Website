import { Grid } from "@mui/material";

import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import PermitsLicensesSection from "../sections/PermitsLicensesSection";
import ProductsSection from "../sections/ProductsSection";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  item: {
    alignItems: "center",
    display: "flex",
    height: "50vh",
  },
};

const MainPage = () => {
  return (
    <Grid container component="main" sx={styles.container}>
      <Grid component="section" id="home" sx={styles.item}>
        <HeroSection />
      </Grid>
      <Grid component="section" id="about-us" sx={styles.item}>
        <AboutSection />
      </Grid>
      <Grid component="section" id="projects" sx={styles.item}>
        <ProjectsSection />
      </Grid>
      <Grid component="section" id="permits-and-licenses" sx={styles.item}>
        <PermitsLicensesSection />
      </Grid>
      <Grid component="section" id="products" sx={styles.item}>
        <ProductsSection />
      </Grid>
      <Grid component="section" id="services" sx={styles.item}>
        <ServicesSection />
      </Grid>
      <Grid component="section" id="contact-us" sx={styles.item}>
        <ContactSection />
      </Grid>
    </Grid>
  );
};

export default MainPage;
