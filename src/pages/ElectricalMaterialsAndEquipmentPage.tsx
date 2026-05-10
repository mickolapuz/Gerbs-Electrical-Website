import {
  Box,
  Container,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";

import img1 from "../assets/Products/ElectricalMaterialsAndEquipment/1.jpg";
import img2 from "../assets/Products/ElectricalMaterialsAndEquipment/2.jpg";
import img3 from "../assets/Products/ElectricalMaterialsAndEquipment/3.png";
import img4 from "../assets/Products/ElectricalMaterialsAndEquipment/4.png";
import img5 from "../assets/Products/ElectricalMaterialsAndEquipment/5.png";
import img6 from "../assets/Products/ElectricalMaterialsAndEquipment/6.jpg";
import img7 from "../assets/Products/ElectricalMaterialsAndEquipment/7.jpg";
import img8 from "../assets/Products/ElectricalMaterialsAndEquipment/8.jpg";

const COLORS = {
  primary: "#22346E",
  secondary: "#D71F36",
  text: "#1A1A1A",
  textSecondary: "#555",
  border: "rgba(34, 52, 110, 0.18)",
  background: "#F9FAFB",
  surface: "#FFFFFF",
  softBlue: "#EEF3FB",
};

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface ProductGroup {
  id: number;
  products: string[];
  images: ProductImage[];
}

const productGroups: ProductGroup[] = [
  {
    id: 1,
    products: [
      "Panel Boards",
      "Dry Type Transformers",
      "Pad-Mounted Transformers",
      "Special Transformers",
      "High Voltage, Medium Voltage, Low Voltage Switchgear",
      "Diesel Engine Generator Set",
    ],
    images: [
      {
        id: 1,
        src: img1,
        alt: "Electrical panel board installation for power distribution",
      },
      {
        id: 2,
        src: img2,
        alt: "Electrical control panel and distribution equipment",
      },
      {
        id: 3,
        src: img3,
        alt: "Switchgear wiring and electrical cable termination",
      },
      {
        id: 4,
        src: img4,
        alt: "Diesel engine generator set for backup power supply",
      },
    ],
  },
  {
    id: 2,
    products: [
      "Lighting Equipment",
      "Wires",
      "PVC Conduit",
      "Circuit Breakers",
    ],
    images: [
      {
        id: 5,
        src: img5,
        alt: "Lighting equipment and electrical fixture materials",
      },
      {
        id: 6,
        src: img6,
        alt: "Electrical wires and cable materials",
      },
      {
        id: 7,
        src: img7,
        alt: "PVC conduit installation for electrical works",
      },
      {
        id: 8,
        src: img8,
        alt: "Circuit breakers and electrical protection equipment",
      },
    ],
  },
];

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 45%, #FFFFFF 100%)",
    overflow: "hidden",
  },
  section: {
    py: { xs: 8, md: 12 },
  },
  contentWrapper: {
    maxWidth: 980,
    mx: "auto",
  },
  eyebrow: {
    mb: 1.5,
    color: COLORS.secondary,
    fontSize: { xs: "0.75rem", md: "0.8rem" },
    fontWeight: 800,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  title: {
    color: COLORS.primary,
    fontWeight: 800,
    lineHeight: 1.12,
    fontSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3rem",
    },
    mb: 2,
  },
  description: {
    maxWidth: 820,
    color: COLORS.text,
    fontSize: { xs: "1rem", md: "1.05rem" },
    lineHeight: 1.8,
    mb: { xs: 4, md: 5 },
  },
  group: {
    mb: { xs: 5, md: 6 },
  },
  productList: {
    m: 0,
    mb: { xs: 3, md: 4 },
    pl: { xs: 3, md: 5 },
    color: COLORS.text,
    "& li": {
      mb: 0.6,
      fontSize: { xs: "0.95rem", md: "1rem" },
      lineHeight: 1.55,
    },
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr 1fr",
      md: "repeat(4, 1fr)",
    },
    border: `1px solid ${COLORS.text}`,
    backgroundColor: COLORS.surface,
    mb: { xs: 3, md: 4 },
  },
  imageCell: {
    minHeight: { xs: 150, sm: 190, md: 220 },
    borderRight: {
      xs: "none",
      md: `1px solid ${COLORS.text}`,
    },
    borderBottom: {
      xs: `1px solid ${COLORS.text}`,
      md: "none",
    },
    overflow: "hidden",
    backgroundColor: "#F4F6F8",
    "&:nth-of-type(odd)": {
      borderRight: {
        xs: `1px solid ${COLORS.text}`,
        md: `1px solid ${COLORS.text}`,
      },
    },
    "&:nth-of-type(n + 3)": {
      borderBottom: {
        xs: "none",
        md: "none",
      },
    },
    "&:last-of-type": {
      borderRight: "none",
    },
  },
  productImage: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 220ms ease",
    willChange: "transform",
    "&:hover": {
      transform: "scale(1.025)",
    },
  },
} satisfies Record<string, SxProps<Theme>>;

const ElectricalMaterialsAndEquipmentPage = () => {
  return (
    <Box className="electrical-materials-page" sx={styles.page}>
      <Box
        component="main"
        aria-labelledby="electrical-materials-title"
        sx={styles.section}
      >
        <Container maxWidth="lg">
          <Box sx={styles.contentWrapper}>
            <Typography component="p" sx={styles.eyebrow}>
              Products
            </Typography>

            <Typography
              id="electrical-materials-title"
              component="h1"
              sx={styles.title}
            >
              Electrical Materials and Equipment
            </Typography>

            <Typography component="p" sx={styles.description}>
              We offer a complete range of power distribution and backup
              solutions designed for reliability and efficiency, engineered to
              meet diverse industrial and commercial requirements. Our lineup
              includes:
            </Typography>

            {productGroups.map((group, groupIndex) => (
              <Box
                key={group.id}
                component="section"
                aria-labelledby={`electrical-product-group-${group.id}`}
                sx={styles.group}
              >
                <Typography
                  id={`electrical-product-group-${group.id}`}
                  component="h2"
                  sx={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    p: 0,
                    m: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    border: 0,
                  }}
                >
                  Electrical materials and equipment group {group.id}
                </Typography>

                <Box component="ul" sx={styles.productList}>
                  {group.products.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </Box>

                <Box
                  component="figure"
                  sx={{
                    m: 0,
                  }}
                >
                  <Box sx={styles.imageGrid}>
                    {group.images.map((image, imageIndex) => (
                      <Box key={image.id} sx={styles.imageCell}>
                        <Box
                          component="img"
                          src={image.src}
                          alt={image.alt}
                          loading={
                            groupIndex === 0 && imageIndex === 0
                              ? "eager"
                              : "lazy"
                          }
                          decoding="async"
                          sx={styles.productImage}
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ElectricalMaterialsAndEquipmentPage;
