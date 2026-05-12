import { Link as RouterLink, useLocation, useParams } from "react-router";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Button, Container, Typography, type Theme } from "@mui/material";

import NotFoundPage from "../NotFoundPage";
import type { ProductDetailsModel } from "./ProductDetailsModel";

interface ProductDetailsPageProps {
  content: ProductDetailsModel[];
}

const createProductSlug = (value: string) => {
  return value
    .toLowerCase()
    .replace(/™/g, "")
    .replace(/®/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const removeSlugPrefix = (slug: string, prefix: string) => {
  if (!slug.startsWith(`${prefix}-`)) return slug;

  return slug.replace(`${prefix}-`, "");
};

const createProductSlugOptions = (product: ProductDetailsModel) => {
  const productSlug = createProductSlug(product.productName);
  const brandSlug = createProductSlug(product.brand);

  const slugOptions = new Set<string>();

  slugOptions.add(productSlug);

  if (brandSlug) {
    slugOptions.add(removeSlugPrefix(productSlug, brandSlug));
  }

  const withoutBrand = brandSlug
    ? removeSlugPrefix(productSlug, brandSlug)
    : productSlug;

  slugOptions.add(withoutBrand);

  const removablePrefixes = [
    "hid-signo",
    "hid-amico",
    "hid-fargo",
    "signo",
    "amico",
    "fargo",
  ];

  removablePrefixes.forEach((prefix) => {
    slugOptions.add(removeSlugPrefix(productSlug, prefix));
    slugOptions.add(removeSlugPrefix(withoutBrand, prefix));
  });

  return Array.from(slugOptions).filter(Boolean);
};

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
    py: { xs: 3.5, md: 5 },
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
      py: 3,
    },
  }),

  heroInner: {
    position: "relative",
    zIndex: 1,
  },

  breadcrumbs: {
    mt: { xs: 1.5, md: 2 },
    mb: { xs: 4, md: 5 },
    display: "flex",
    alignItems: "center",
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
      outline: "2px solid #22346E",
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

  productLayout: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "0.95fr 1.05fr",
    },
    gap: { xs: 4, md: 6 },
    alignItems: "start",
  },

  imageColumn: {
    alignSelf: "start",
    mt: 0,
  },

  imagePanel: {
    position: { xs: "relative", md: "sticky" },
    top: { md: 120 },
    alignSelf: "start",
    mt: 0,
    borderRadius: "26px",
    border: "1px solid rgba(34,52,110,0.10)",
    backgroundColor: "rgba(255,255,255,0.92)",
    boxShadow: "0 18px 48px rgba(15,23,42,0.08)",
    overflow: "hidden",
  },

  imageWrapper: {
    height: {
      xs: "clamp(320px, 78vw, 460px)",
      sm: 460,
      md: 560,
    },
    p: { xs: 3, md: 4 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, rgba(34,52,110,0.045), rgba(215,31,54,0.035))",
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

  detailsPanel: {
    p: 0,
    mt: 0,
    alignSelf: "start",
  },

  title: {
    m: 0,
    color: "#0F172A",
    fontWeight: 900,
    lineHeight: 1.08,
    letterSpacing: "-0.035em",
    fontSize: {
      xs: "2rem",
      sm: "2.45rem",
      md: "3rem",
    },
  },

  tagline: {
    mt: 1.25,
    color: "#D71F36",
    fontWeight: 850,
    fontSize: { xs: "0.9rem", md: "1rem" },
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    lineHeight: 1.6,
  },

  description: {
    mt: 2,
    color: "text.secondary",
    fontSize: { xs: "0.98rem", md: "1.05rem" },
    lineHeight: 1.8,
  },

  featureSection: {
    mt: 3,
  },

  sectionTitle: {
    mb: 1.75,
    color: "#0F172A",
    fontWeight: 850,
    lineHeight: 1.2,
    fontSize: { xs: "1.25rem", md: "1.45rem" },
  },

  featureList: {
    m: 0,
    p: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 1.4,
  },

  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.25,
  },

  featureIcon: {
    mt: "3px",
    color: "#22346E",
    fontSize: 21,
    flexShrink: 0,
  },

  featureText: {
    color: "text.secondary",
    fontSize: { xs: "0.94rem", md: "0.98rem" },
    lineHeight: 1.75,
  },

  specificationsSection: {
    mt: 3,
  },

  specificationsList: {
    m: 0,
    p: 0,
    listStyle: "none",
  },

  specificationItem: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "150px 1fr",
    },
    gap: { xs: 0.5, sm: 2 },
    py: 1.25,
    borderBottom: "1px solid rgba(34,52,110,0.10)",

    "&:last-of-type": {
      borderBottom: "none",
    },
  },

  specificationLabel: {
    color: "#22346E",
    fontWeight: 850,
    lineHeight: 1.5,
  },

  specificationValue: {
    color: "text.secondary",
    lineHeight: 1.65,
  },

  applicationsSection: {
    mt: 3,
  },

  applicationList: {
    m: 0,
    p: 0,
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, minmax(0, 1fr))",
    },
    gap: 1,
  },

  applicationItem: {
    position: "relative",
    pl: 3,
    color: "text.secondary",
    lineHeight: 1.7,

    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "0.72em",
      width: 8,
      height: 8,
      borderRadius: "999px",
      backgroundColor: "#D71F36",
    },
  },

  actionWrapper: {
    mt: 3.5,
    display: "flex",
    justifyContent: "center",
  },

  inquireButton: {
    width: { xs: "100%", sm: "fit-content" },
    borderRadius: "999px",
    px: 3.5,
    py: 1.2,
    textTransform: "none",
    fontWeight: 800,
    color: "#FFFFFF",
    backgroundColor: "#22346E",
    boxShadow: "0 10px 24px rgba(34,52,110,0.18)",

    "&:hover": {
      backgroundColor: "#1B2A59",
      boxShadow: "0 14px 30px rgba(34,52,110,0.24)",
    },

    "&:focus-visible": {
      outline: "3px solid rgba(34,52,110,0.25)",
      outlineOffset: "4px",
    },
  },
};

const ProductDetailsPage = ({ content }: ProductDetailsPageProps) => {
  const params = useParams();
  const location = useLocation();

  const productSlug =
    params.productSlug ??
    params.productName ??
    params.slug ??
    params["*"]?.split("/").filter(Boolean).at(-1) ??
    location.pathname.split("/").filter(Boolean).at(-1);

  const productDetails = content.find((product) => {
    const slugOptions = createProductSlugOptions(product);

    return slugOptions.includes(productSlug ?? "");
  });

  if (!productDetails) {
    return <NotFoundPage />;
  }

  const hasFeatures = Boolean(productDetails.features?.length);
  const hasSpecifications = Boolean(productDetails.specifications?.length);
  const hasApplications = Boolean(productDetails.applications?.length);

  return (
    <Box component="main" sx={styles.page}>
      <Box component="header" sx={styles.hero}>
        <Container maxWidth="lg">
          <Box sx={styles.heroInner}>
            <Box
              component="nav"
              aria-label="Breadcrumb"
              sx={styles.breadcrumbs}
            >
              <Box
                component={RouterLink}
                to={productDetails.backTo.href}
                sx={styles.breadcrumbLink}
              >
                {productDetails.backTo.label}
              </Box>

              <ChevronRightRoundedIcon
                aria-hidden="true"
                sx={styles.breadcrumbIcon}
              />

              <Typography component="span" sx={styles.breadcrumbCurrent}>
                {productDetails.productName}
              </Typography>
            </Box>

            <Box sx={styles.productLayout}>
              <Box sx={styles.imageColumn}>
                <Box sx={styles.imagePanel}>
                  <Box sx={styles.imageWrapper}>
                    <Box
                      component="img"
                      src={productDetails.image.src}
                      alt={productDetails.image.alt}
                      loading="eager"
                      decoding="async"
                      sx={
                        productDetails.imageSx
                          ? [
                              styles.productImage,
                              ...(Array.isArray(productDetails.imageSx)
                                ? productDetails.imageSx
                                : [productDetails.imageSx]),
                            ]
                          : styles.productImage
                      }
                    />
                  </Box>
                </Box>
              </Box>

              <Box component="section" sx={styles.detailsPanel}>
                <Typography component="h1" sx={styles.title}>
                  {productDetails.productName}
                </Typography>

                {productDetails.tagline && (
                  <Typography component="p" sx={styles.tagline}>
                    {productDetails.tagline}
                  </Typography>
                )}

                <Typography component="p" sx={styles.description}>
                  {productDetails.description}
                </Typography>

                {hasFeatures && (
                  <Box component="section" sx={styles.featureSection}>
                    <Typography component="h2" sx={styles.sectionTitle}>
                      Key Features
                    </Typography>

                    <Box component="ul" sx={styles.featureList}>
                      {productDetails.features?.map((feature) => (
                        <Box
                          component="li"
                          key={feature.id}
                          sx={styles.featureItem}
                        >
                          <CheckCircleRoundedIcon
                            aria-hidden="true"
                            sx={styles.featureIcon}
                          />

                          <Typography component="p" sx={styles.featureText}>
                            {feature.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {hasSpecifications && (
                  <Box component="section" sx={styles.specificationsSection}>
                    <Typography component="h2" sx={styles.sectionTitle}>
                      Specifications
                    </Typography>

                    <Box component="dl" sx={styles.specificationsList}>
                      {productDetails.specifications?.map((specification) => (
                        <Box
                          key={specification.id}
                          component="div"
                          sx={styles.specificationItem}
                        >
                          <Typography
                            component="dt"
                            sx={styles.specificationLabel}
                          >
                            {specification.label}
                          </Typography>

                          <Typography
                            component="dd"
                            sx={styles.specificationValue}
                          >
                            {specification.value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {hasApplications && (
                  <Box component="section" sx={styles.applicationsSection}>
                    <Typography component="h2" sx={styles.sectionTitle}>
                      Applications
                    </Typography>

                    <Box component="ul" sx={styles.applicationList}>
                      {productDetails.applications?.map((application) => (
                        <Typography
                          key={application}
                          component="li"
                          sx={styles.applicationItem}
                        >
                          {application}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                )}

                <Box sx={styles.actionWrapper}>
                  <Button
                    component={RouterLink}
                    to="/#contact-us"
                    sx={styles.inquireButton}
                    aria-label={`Inquire about ${productDetails.productName}`}
                  >
                    Inquire Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
