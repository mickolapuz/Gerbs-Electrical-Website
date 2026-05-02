import { Box, type Theme } from "@mui/material";

const styles = {
  container: (theme: Theme) => ({
    width: "100%",
    minHeight: "50vh",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
  }),
};

const ProductsSection = () => {
  return <Box sx={styles.container}>Products Section</Box>;
};

export default ProductsSection;
