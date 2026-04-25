import { Box } from "@mui/material";

import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import PermitsLicensesSection from "../sections/PermitsLicensesSection";
import ProductsSection from "../sections/ProductsSection";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  section: {
    width: "100%",
    px: { xs: 2, md: 4 },
    scrollMarginTop: {
      xs: "80px",
      md: "100px",
    },
  },
};

const MainPage = () => {
  return (
    <Box component="main" sx={styles.page}>
      <Box
        aria-labelledby="hero-title"
        component="section"
        id="home"
        sx={styles.section}
      >
        <HeroSection />
      </Box>

      <Box component="section" id="about-us" sx={styles.section}>
        <AboutSection />
      </Box>

      <Box component="section" id="projects" sx={styles.section}>
        <ProjectsSection />
      </Box>

      <Box component="section" id="permits-and-licenses" sx={styles.section}>
        <PermitsLicensesSection />
      </Box>

      <Box component="section" id="products" sx={styles.section}>
        <ProductsSection />
      </Box>

      <Box component="section" id="services" sx={styles.section}>
        <ServicesSection />
      </Box>

      <Box component="section" id="contact-us" sx={styles.section}>
        <ContactSection />
      </Box>
    </Box>
  );
};

export default MainPage;
