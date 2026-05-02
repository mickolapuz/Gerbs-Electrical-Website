import { Box } from "@mui/material";

const styles = {
  container: {
    width: "100%",
    minHeight: "50vh",
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 45%, #FFFFFF 100%)",
    overflow: "hidden",
  },
};

const ServicesSection = () => {
  return <Box sx={styles.container}>Services Section</Box>;
};

export default ServicesSection;
