import { Box } from "@mui/material";

import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import PermitsLicensesSection from "../sections/PermitsLicensesSection";
import ProductsSection from "../sections/ProductsSection";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";
import DesignSection from "../sections/DesignSection";

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  section: (scrollMarginTop: { xs: string; md: string }) => ({
    width: "100%",
    scrollMarginTop,
  }),
};

const MainPage = () => {
  return (
    <Box component="main" sx={styles.page}>
      <Box
        aria-labelledby="hero-title"
        component="section"
        id="home"
        sx={styles.section({
          xs: "200px",
          md: "250px",
        })}
      >
        <HeroSection />
      </Box>

      <Box
        component="section"
        id="about-us"
        sx={styles.section({
          xs: "70px",
          md: "80px",
        })}
      >
        <AboutSection />
      </Box>

      <Box
        component="section"
        id="permits-and-licenses"
        sx={styles.section({
          xs: "70px",
          md: "80px",
        })}
      >
        <PermitsLicensesSection />
      </Box>

      <Box
        component="section"
        id="projects"
        sx={styles.section({
          xs: "70px",
          md: "80px",
        })}
      >
        <ProjectsSection />
      </Box>

      <Box
        component="section"
        id="products"
        sx={styles.section({
          xs: "70px",
          md: "85px",
        })}
      >
        <ProductsSection />
      </Box>

      <Box
        component="section"
        id="services"
        sx={styles.section({
          xs: "70px",
          md: "85px",
        })}
      >
        <ServicesSection />
      </Box>

      <Box
        component="section"
        id="design"
        sx={styles.section({
          xs: "90px",
          md: "115px",
        })}
      >
        <DesignSection />
      </Box>

      <Box
        component="section"
        id="contact-us"
        sx={styles.section({
          xs: "60px",
          md: "80px",
        })}
      >
        <ContactSection />
      </Box>
    </Box>
  );
};

export default MainPage;
