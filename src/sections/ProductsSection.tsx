import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  type Theme,
} from "@mui/material";

interface Product {
  id: number;
  category: string;
  description: string;
  products: string[];
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    category: "Safety and Security",
    description:
      "Reliable safety and security solutions for facilities, commercial spaces, industrial sites, and controlled access environments.",
    products: [
      "Metal detection and screening solutions",
      "X-ray baggage inspection systems",
      "CCTV and video surveillance equipment",
      "Access control and biometric readers",
      "Parking barriers and vehicle access systems",
      "Turnstiles and pedestrian entrance control",
    ],
    href: "/products/safety-and-security",
  },
  {
    id: 2,
    category: "Electrical Materials and Equipment",
    description:
      "Essential electrical materials and equipment for power distribution, lighting, wiring, and electrical system installations.",
    products: [
      "Power distribution systems",
      "Panel boards and switchgear",
      "Transformers and generator sets",
      "Lighting equipment",
      "Wires, conduits, and circuit breakers",
    ],
    href: "/products/electrical-materials-and-equipment",
  },
];

const styles = {
  section: {
    width: "100%",
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 45%, #FFFFFF 100%)",
    overflow: "hidden",
  },

  container: {
    py: {
      xs: 7,
      md: 10,
    },
  },

  header: {
    maxWidth: 760,
    mx: "auto",
    textAlign: "center",
    mb: {
      xs: 4,
      md: 6,
    },
  },

  eyebrow: {
    color: "secondary.main",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontSize: "0.78rem",
    mb: 1.5,
  },

  heading: {
    color: "primary.main",
    fontWeight: 800,
    fontSize: {
      xs: "2rem",
      sm: "2.4rem",
      md: "3rem",
    },
    lineHeight: 1.12,
    mb: 2,
  },

  description: {
    color: "text.secondary",
    fontSize: {
      xs: "1rem",
      md: "1.08rem",
    },
    lineHeight: 1.8,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(2, minmax(0, 1fr))",
    },
    gap: {
      xs: 2.5,
      md: 3,
    },
    alignItems: "stretch",
  },

  card: (theme: Theme) => ({
    height: "100%",
    position: "relative",
    borderRadius: "18px",
    backgroundColor: "background.paper",
    border: "1px solid",
    borderColor: "rgba(34,52,110,0.12)",
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
    p: {
      xs: 2.5,
      sm: 3,
      md: 3.5,
    },
    transition:
      "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
      borderColor: theme.palette.primary.main,
    },
  }),

  cardHeader: {
    mb: 2.5,
  },

  category: {
    color: "primary.main",
    fontWeight: 800,
    fontSize: {
      xs: "1.25rem",
      md: "1.45rem",
    },
    lineHeight: 1.25,
    mb: 1,
  },

  cardDescription: {
    color: "text.secondary",
    lineHeight: 1.75,
  },

  productList: {
    m: 0,
    pl: 0,
    listStyle: "none",
    display: "grid",
    gap: 1.25,
  },

  productItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.25,
    color: "text.primary",
    lineHeight: 1.6,
    fontSize: "0.96rem",
  },

  bullet: {
    width: 8,
    height: 8,
    mt: "0.55rem",
    borderRadius: "50%",
    flexShrink: 0,
    backgroundColor: "secondary.main",
  },

  action: {
    mt: 3,
  },

  button: {
    borderRadius: "999px",
    textTransform: "none",
    fontWeight: 700,
    px: 2.5,
    py: 1,
  },
};

const ProductsSection = () => {
  return (
    <Box component="section" id="products" sx={styles.section}>
      <Container maxWidth="lg" sx={styles.container}>
        <Box sx={styles.header}>
          <Typography component="p" sx={styles.eyebrow}>
            Our Products
          </Typography>

          <Typography component="h2" sx={styles.heading}>
            Reliable Products for Safety, Security, and Electrical Systems
          </Typography>

          <Typography component="p" sx={styles.description}>
            Gerbs Electrical Trading and Services supplies dependable safety,
            security, and electrical products for commercial, industrial,
            institutional, and facility-based projects.
          </Typography>
        </Box>

        <Box sx={styles.grid}>
          {products.map((product) => (
            <Box
              key={product.id}
              component="article"
              sx={styles.card}
              aria-labelledby={`product-category-${product.id}`}
            >
              <Box sx={styles.cardHeader}>
                <Typography
                  id={`product-category-${product.id}`}
                  component="h3"
                  sx={styles.category}
                >
                  {product.category}
                </Typography>

                <Typography component="p" sx={styles.cardDescription}>
                  {product.description}
                </Typography>
              </Box>

              <Box component="ul" sx={styles.productList}>
                {product.products.map((item) => (
                  <Box component="li" key={item} sx={styles.productItem}>
                    <Box component="span" sx={styles.bullet} />
                    <Typography component="span">{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Stack direction="row" sx={styles.action}>
                <Button
                  component="a"
                  href={product.href}
                  variant="outlined"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={styles.button}
                  aria-label={`View ${product.category} products`}
                >
                  View Products
                </Button>
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsSection;
