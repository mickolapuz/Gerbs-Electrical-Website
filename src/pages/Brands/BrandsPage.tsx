import { Link as RouterLink } from "react-router";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box, Button, Container, Typography, type Theme } from "@mui/material";

import type { BrandsPageModel } from "./BrandsModel";

interface BrandsPageProps {
  content: BrandsPageModel;
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
    py: { xs: 8, md: 12 },
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
      py: 7,
    },
  }),

  heroInner: {
    position: "relative",
    zIndex: 1,
    maxWidth: 860,
    mx: "auto",
    textAlign: "center",
  },

  eyebrow: {
    width: "fit-content",
    mx: "auto",
    px: 1.5,
    py: 0.75,
    borderRadius: "999px",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "#22346E",
    backgroundColor: "rgba(34,52,110,0.08)",
    border: "1px solid rgba(34,52,110,0.12)",
  },

  heading: {
    mt: 2,
    fontWeight: 800,
    lineHeight: 1.08,
    color: "#0F172A",
    fontSize: {
      xs: "2.25rem",
      sm: "2.75rem",
      md: "3.5rem",
    },
  },

  description: {
    mt: 2.5,
    mx: "auto",
    maxWidth: 780,
    color: "text.secondary",
    fontSize: { xs: "1rem", md: "1.08rem" },
    lineHeight: 1.8,
  },

  contentSection: {
    py: { xs: 6, md: 9 },
  },

  brandsList: {
    display: "flex",
    flexDirection: "column",
  },

  brandItem: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "180px minmax(0, 1fr) auto",
    },
    gap: { xs: 2.5, md: 4 },
    alignItems: "flex-start",
    py: { xs: 4, md: 5 },
    borderTop: "1px solid rgba(34,52,110,0.12)",

    "&:first-of-type": {
      borderTop: "none",
      pt: 0,
    },
  },

  brandLogoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },

  logoBox: {
    width: { xs: 56, md: 72 },
    height: { xs: 56, md: 72 },
    borderRadius: "16px",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    background:
      "linear-gradient(135deg, rgba(34,52,110,0.10), rgba(215,31,54,0.08))",
    border: "1px solid rgba(34,52,110,0.12)",
    overflow: "hidden",
  },

  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    p: 1.25,
  },

  logoIcon: {
    fontSize: { xs: 30, md: 36 },
    color: "#22346E",
  },

  brandNameMobile: {
    display: { xs: "block", md: "none" },
    fontWeight: 800,
    color: "#0F172A",
    lineHeight: 1.2,
  },

  brandNameDesktop: {
    display: { xs: "none", md: "block" },
    fontWeight: 800,
    color: "#0F172A",
    lineHeight: 1.2,
    mb: 1.5,
  },

  brandContent: {
    maxWidth: 760,
  },

  brandText: {
    color: "text.secondary",
    lineHeight: 1.8,
  },

  featureList: {
    listStyle: "none",
    p: 0,
    m: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  featureItem: {
    display: "flex",
    gap: 1.25,
    alignItems: "flex-start",
  },

  featureIcon: {
    mt: "3px",
    fontSize: 20,
    color: "#22346E",
    flexShrink: 0,
  },

  featureKey: {
    fontWeight: 800,
    color: "#0F172A",
    lineHeight: 1.35,
  },

  featureValue: {
    mt: 0.5,
    color: "text.secondary",
    lineHeight: 1.75,
  },

  brandAction: {
    display: "flex",
    justifyContent: {
      xs: "flex-start",
      md: "flex-end",
    },
    alignSelf: {
      xs: "flex-start",
      md: "center",
    },
  },

  button: {
    width: { xs: "100%", sm: "fit-content" },
    borderRadius: "999px",
    px: 2.75,
    py: 1.15,
    textTransform: "none",
    fontWeight: 800,
    color: "#FFFFFF",
    backgroundColor: "#22346E",
    boxShadow: "0 10px 24px rgba(34,52,110,0.18)",
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: "#1B2A59",
      boxShadow: "0 14px 30px rgba(34,52,110,0.24)",
    },
  },

  ctaSection: {
    pb: { xs: 7, md: 10 },
  },

  ctaBox: {
    borderRadius: "22px",
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
    fontSize: { xs: "1.55rem", md: "2rem" },
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

const BrandsPage = ({ content }: BrandsPageProps) => {
  const renderBrandLogo = (brand: BrandsPageModel["brands"][number]) => {
    if (brand.logo) {
      return (
        <Box
          component="img"
          src={brand.logo}
          alt={`${brand.brand} logo`}
          loading="lazy"
          sx={styles.logoImage}
        />
      );
    }

    return <BusinessRoundedIcon aria-hidden="true" sx={styles.logoIcon} />;
  };

  const renderBrandDescription = (
    description: BrandsPageModel["brands"][number]["description"],
  ) => {
    if (typeof description === "string") {
      return (
        <Typography component="p" variant="body1" sx={styles.brandText}>
          {description}
        </Typography>
      );
    }

    return (
      <Box component="ul" sx={styles.featureList}>
        {description.map((item) => (
          <Box component="li" key={item.key} sx={styles.featureItem}>
            <CheckCircleRoundedIcon
              aria-hidden="true"
              sx={styles.featureIcon}
            />

            <Box>
              <Typography
                component="h3"
                variant="subtitle1"
                sx={styles.featureKey}
              >
                {item.key}
              </Typography>

              <Typography
                component="p"
                variant="body2"
                sx={styles.featureValue}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box component="main" sx={styles.page}>
      <Box component="header" sx={styles.hero}>
        <Container maxWidth="lg">
          <Box sx={styles.heroInner}>
            <Typography component="p" sx={styles.eyebrow}>
              Brand Overview
            </Typography>

            <Typography component="h1" sx={styles.heading}>
              {content.page} Brands
            </Typography>

            <Typography component="p" sx={styles.description}>
              {content.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        aria-label={`${content.page} brand list`}
        sx={styles.contentSection}
      >
        <Container maxWidth="lg">
          <Box sx={styles.brandsList}>
            {content.brands.map((brand) => (
              <Box key={brand.id} component="article" sx={styles.brandItem}>
                <Box sx={styles.brandLogoWrapper}>
                  <Box sx={styles.logoBox}>{renderBrandLogo(brand)}</Box>

                  <Typography
                    component="h2"
                    variant="h5"
                    sx={styles.brandNameMobile}
                  >
                    {brand.brand}
                  </Typography>
                </Box>

                <Box sx={styles.brandContent}>
                  <Typography
                    component="h2"
                    variant="h5"
                    sx={styles.brandNameDesktop}
                  >
                    {brand.brand}
                  </Typography>

                  {renderBrandDescription(brand.description)}
                </Box>

                <Box sx={styles.brandAction}>
                  <Button
                    component={RouterLink}
                    to={brand.href}
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={styles.button}
                    aria-label={`View ${brand.brand} products`}
                  >
                    View Products
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        aria-labelledby="brands-cta-heading"
        sx={styles.ctaSection}
      >
        <Container maxWidth="lg">
          <Box sx={styles.ctaBox}>
            <Box sx={styles.ctaContent}>
              <Box>
                <Typography
                  id="brands-cta-heading"
                  component="h2"
                  sx={styles.ctaTitle}
                >
                  Need help choosing the right brand?
                </Typography>

                <Typography component="p" sx={styles.ctaDescription}>
                  Our team can help you identify the right products and
                  solutions based on your project requirements, site conditions,
                  and security needs.
                </Typography>
              </Box>

              <Button
                component={RouterLink}
                to="/#contact-us"
                sx={styles.ctaButton}
                aria-label="Contact Gerbs Electrical Trading and Services"
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

export default BrandsPage;
