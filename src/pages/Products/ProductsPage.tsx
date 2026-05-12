import { Link as RouterLink } from "react-router";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Button, Container, Typography, type Theme } from "@mui/material";

import type { ProductItem, ProductsPageModel } from "./ProductsModel";

interface ProductsPageProps {
  content: ProductsPageModel;
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 42%, #FFFFFF 100%)",
    overflow: "hidden",
  },

  hero: (theme: Theme) => ({
    position: "relative",
    py: { xs: 6, md: 9 },
    borderBottom: "1px solid rgba(34,52,110,0.10)",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage: `
        linear-gradient(rgba(34,52,110,0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34,52,110,0.045) 1px, transparent 1px)
      `,
      backgroundSize: "34px 34px",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.16))",
      pointerEvents: "none",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      width: 440,
      height: 440,
      right: { xs: -240, md: -120 },
      top: { xs: -200, md: -120 },
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(215,31,54,0.14) 0%, rgba(215,31,54,0.04) 42%, transparent 72%)",
      pointerEvents: "none",
    },

    [theme.breakpoints.down("sm")]: {
      py: 5.5,
    },
  }),

  heroInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: 900,
    mx: "auto",
    textAlign: "center",
  },

  breadcrumbs: {
    mb: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 0.75,
    flexWrap: "wrap",
  },

  breadcrumbLink: {
    color: "#22346E",
    fontWeight: 800,
    fontSize: "0.92rem",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },

    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "#22346E",
      outlineOffset: "3px",
      borderRadius: "4px",
    },
  },

  breadcrumbCurrent: {
    color: "text.secondary",
    fontWeight: 700,
    fontSize: "0.92rem",
  },

  breadcrumbIcon: {
    fontSize: 18,
    color: "text.secondary",
  },

  logoWrapper: {
    mx: "auto",
    width: { xs: 150, sm: 180, md: 220 },
    minHeight: { xs: 72, md: 96 },
    display: "grid",
    placeItems: "center",
    mb: 2.5,
  },

  logo: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },

  description: {
    mx: "auto",
    maxWidth: 780,
    color: "text.secondary",
    fontSize: { xs: "1rem", md: "1.08rem" },
    lineHeight: 1.8,
  },

  productsSection: {
    py: { xs: 6, md: 9 },
  },

  groupSection: {
    "&:not(:last-of-type)": {
      mb: { xs: 6, md: 8 },
    },
  },

  groupHeader: {
    mb: { xs: 3, md: 4 },
  },

  groupName: {
    color: "#0F172A",
    fontWeight: 900,
    lineHeight: 1.2,
    fontSize: { xs: "1.45rem", md: "2rem" },
  },

  groupDescription: {
    mt: 1,
    maxWidth: 760,
    color: "text.secondary",
    lineHeight: 1.75,
    fontSize: { xs: "0.98rem", md: "1.03rem" },
  },

  productsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(2, minmax(0, 1fr))",
      xl: "repeat(3, minmax(0, 1fr))",
    },
    gap: { xs: 2.5, md: 3 },
  },

  productItem: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    borderRadius: "22px",
    border: "1px solid rgba(34,52,110,0.10)",
    backgroundColor: "rgba(255,255,255,0.9)",
    boxShadow: "0 16px 42px rgba(15,23,42,0.07)",
    overflow: "hidden",
    transition:
      "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",

    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: "rgba(34,52,110,0.22)",
      boxShadow: "0 22px 56px rgba(15,23,42,0.11)",
    },
  },

  imageWrapper: {
    height: {
      xs: "clamp(320px, 78vw, 430px)",
      sm: 420,
      md: 390,
      lg: 410,
    },
    p: {
      xs: 2.5,
      sm: 3,
      md: 3.5,
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, rgba(34,52,110,0.045), rgba(215,31,54,0.035))",
    borderBottom: "1px solid rgba(34,52,110,0.08)",
    overflow: "hidden",
  },

  productImage: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
  },

  productContent: {
    p: { xs: 2.5, md: 3 },
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },

  productName: {
    fontWeight: 800,
    color: "#0F172A",
    lineHeight: 1.25,
    fontSize: { xs: "1.15rem", md: "1.25rem" },
  },

  tagline: {
    mt: 1,
    color: "#22346E",
    fontWeight: 800,
    fontSize: "0.82rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    lineHeight: 1.55,
  },

  productAction: {
    mt: "auto",
    pt: 2.5,
  },

  button: {
    width: "100%",
    borderRadius: "999px",
    px: 2.5,
    py: 1.15,
    textTransform: "none",
    fontWeight: 800,
    color: "#FFFFFF",
    backgroundColor: "#22346E",
    boxShadow: "0 10px 24px rgba(34,52,110,0.18)",

    "&:hover": {
      backgroundColor: "#1B2A59",
      boxShadow: "0 14px 30px rgba(34,52,110,0.24)",
    },
  },

  ctaSection: {
    pb: { xs: 7, md: 10 },
  },

  ctaBox: {
    borderRadius: "24px",
    p: { xs: 3, md: 4 },
    border: "1px solid rgba(34,52,110,0.10)",
    background:
      "linear-gradient(135deg, rgba(34,52,110,0.96), rgba(34,52,110,0.88))",
    color: "#FFFFFF",
    boxShadow: "0 22px 60px rgba(15,23,42,0.18)",
  },

  ctaContent: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "flex-start", md: "center" },
    justifyContent: "space-between",
    gap: 3,
  },

  ctaTitle: {
    fontWeight: 800,
    lineHeight: 1.2,
    fontSize: { xs: "1.45rem", md: "2rem" },
  },

  ctaDescription: {
    mt: 1,
    maxWidth: 720,
    color: "rgba(255,255,255,0.78)",
    lineHeight: 1.75,
  },

  ctaButton: {
    width: { xs: "100%", sm: "fit-content" },
    borderRadius: "999px",
    px: 3,
    py: 1.2,
    textTransform: "none",
    fontWeight: 800,
    color: "#22346E",
    backgroundColor: "#FFFFFF",
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: "#F8FAFC",
    },
  },
};

const ProductCard = ({ product }: { product: ProductItem }) => {
  return (
    <Box component="article" sx={styles.productItem}>
      <Box sx={styles.imageWrapper}>
        <Box
          component="img"
          src={product.image.src}
          alt={product.image.alt}
          loading="lazy"
          sx={styles.productImage}
        />
      </Box>

      <Box sx={styles.productContent}>
        <Typography component="h3" variant="h5" sx={styles.productName}>
          {product.productName}
        </Typography>

        {product.tagline && (
          <Typography component="p" sx={styles.tagline}>
            {product.tagline}
          </Typography>
        )}

        <Box sx={styles.productAction}>
          <Button
            component={RouterLink}
            to={product.href}
            endIcon={<ArrowForwardRoundedIcon />}
            sx={styles.button}
            aria-label={`View ${product.productName} details`}
          >
            View Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const ProductsPage = ({ content }: ProductsPageProps) => {
  const hasProductGroups = Boolean(content.productGroups?.length);
  const hasProducts = Boolean(content.products?.length);

  return (
    <Box component="main" sx={styles.page}>
      <Box component="header" sx={styles.hero}>
        <Container maxWidth="lg">
          <Box component="nav" aria-label="Breadcrumb" sx={styles.breadcrumbs}>
            <Box
              component={RouterLink}
              to={content.backTo.href}
              sx={styles.breadcrumbLink}
            >
              {content.backTo.label}
            </Box>

            <ChevronRightRoundedIcon
              aria-hidden="true"
              sx={styles.breadcrumbIcon}
            />

            <Typography component="span" sx={styles.breadcrumbCurrent}>
              {content.brand}
            </Typography>
          </Box>

          <Box sx={styles.heroInner}>
            <Box sx={styles.logoWrapper}>
              <Box
                component="img"
                src={content.logo}
                alt={`${content.brand} logo`}
                sx={styles.logo}
              />
            </Box>

            <Typography component="p" sx={styles.description}>
              {content.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        aria-label={`${content.brand} product list`}
        sx={styles.productsSection}
      >
        <Container maxWidth="lg">
          {hasProductGroups &&
            content.productGroups?.map((group) => {
              const groupId = `${content.brand}-${group.groupName}`
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <Box
                  key={group.id}
                  component="section"
                  aria-labelledby={groupId}
                  sx={styles.groupSection}
                >
                  <Box sx={styles.groupHeader}>
                    <Typography
                      id={groupId}
                      component="h2"
                      sx={styles.groupName}
                    >
                      {group.groupName}
                    </Typography>

                    {group.description && (
                      <Typography component="p" sx={styles.groupDescription}>
                        {group.description}
                      </Typography>
                    )}
                  </Box>

                  <Box sx={styles.productsGrid}>
                    {group.products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </Box>
                </Box>
              );
            })}

          {!hasProductGroups && hasProducts && (
            <Box sx={styles.productsGrid}>
              {content.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Box>
          )}
        </Container>
      </Box>

      <Box
        component="section"
        aria-label={`${content.brand} product inquiry`}
        sx={styles.ctaSection}
      >
        <Container maxWidth="lg">
          <Box sx={styles.ctaBox}>
            <Box sx={styles.ctaContent}>
              <Box>
                <Typography component="h2" sx={styles.ctaTitle}>
                  Looking for more {content.brand} products?
                </Typography>

                <Typography component="p" sx={styles.ctaDescription}>
                  Tell us what product, model, or security requirement you need,
                  and our team will help you find the right solution.
                </Typography>
              </Box>

              <Button
                component={RouterLink}
                to="/#contact-us"
                sx={styles.ctaButton}
                aria-label={`Inquire about more ${content.brand} products`}
              >
                Inquire Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductsPage;
