import { Box, Typography } from "@mui/material";
import { Link } from "react-router";

import img1 from "../assets/Products/ElectricalMaterialsAndEquipment/1.jpg";
import img2 from "../assets/Products/ElectricalMaterialsAndEquipment/2.jpg";
import img3 from "../assets/Products/ElectricalMaterialsAndEquipment/3.png";
import img4 from "../assets/Products/ElectricalMaterialsAndEquipment/4.png";
import img5 from "../assets/Products/ElectricalMaterialsAndEquipment/5.png";
import img6 from "../assets/Products/ElectricalMaterialsAndEquipment/6.jpg";
import img7 from "../assets/Products/ElectricalMaterialsAndEquipment/7.jpg";
import img8 from "../assets/Products/ElectricalMaterialsAndEquipment/8.jpg";

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface ProductGroup {
  id: number;
  title: string;
  description: string;
  products: string[];
  images: ProductImage[];
}

const productGroups: ProductGroup[] = [
  {
    id: 1,
    title: "Power Distribution and Backup Solutions",
    description:
      "Reliable power distribution systems and backup equipment for industrial, commercial, and facility requirements.",
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
        alt: "Panel board installation for electrical power distribution",
      },
      {
        id: 2,
        src: img2,
        alt: "Electrical distribution and control panel equipment",
      },
      {
        id: 3,
        src: img3,
        alt: "Switchgear wiring and cable termination inside an electrical panel",
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
    title: "Electrical Materials and Installation Supplies",
    description:
      "Essential electrical materials and components used for safe, efficient, and code-compliant installations.",
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
        alt: "Electrical wires and cable materials for installation works",
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
    overflowX: "hidden",
    pb: 10,
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 48%, #FFFFFF 100%)",
  },
  section: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    pt: { xs: 5, md: 7 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    maxWidth: 980,
    mx: "auto",
    px: { xs: 2.5, sm: 3, md: 0 },
  },
  eyebrow: {
    mb: 1.25,
    color: "#D71F36",
    fontSize: { xs: "0.72rem", md: "0.78rem" },
    fontWeight: 800,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
  title: {
    mb: 2,
    color: "#22346E",
    fontSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3.15rem",
    },
    fontWeight: 900,
    lineHeight: 1.08,
    letterSpacing: "-0.035em",
  },
  description: {
    maxWidth: 860,
    mb: { xs: 4, md: 5 },
    color: "rgba(26, 26, 26, 0.78)",
    fontSize: { xs: "0.98rem", md: "1.05rem" },
    lineHeight: 1.8,
  },
  group: {
    mb: { xs: 4, md: 5 },
    p: { xs: 2.25, sm: 3, md: 3.5 },
    borderRadius: "18px",
    border: "1px solid rgba(34, 52, 110, 0.12)",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 10px 28px rgba(15, 23, 42, 0.055)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      background: "linear-gradient(90deg, #22346E 0%, #D71F36 100%)",
    },
    "&:last-of-type": {
      mb: 0,
    },
  },
  groupHeader: {
    mb: 2.5,
  },
  groupTitle: {
    mb: 0.75,
    color: "#22346E",
    fontSize: { xs: "1.2rem", md: "1.45rem" },
    fontWeight: 850,
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
  },
  groupDescription: {
    maxWidth: 760,
    color: "rgba(26, 26, 26, 0.68)",
    fontSize: { xs: "0.9rem", md: "0.96rem" },
    lineHeight: 1.65,
  },
  productList: {
    m: 0,
    mb: { xs: 2.75, md: 3.25 },
    p: 0,
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, minmax(0, 1fr))",
    },
    gap: { xs: 1, sm: 1.25 },
    color: "#1A1A1A",
    "& li": {
      position: "relative",
      minHeight: 42,
      display: "flex",
      alignItems: "center",
      borderRadius: "12px",
      border: "1px solid rgba(34, 52, 110, 0.1)",
      backgroundColor: "rgba(249, 250, 251, 0.92)",
      px: 1.75,
      py: 1.15,
      pl: 4,
      fontSize: { xs: "0.92rem", md: "0.96rem" },
      lineHeight: 1.45,
      fontWeight: 500,
    },
    "& li::before": {
      content: '""',
      position: "absolute",
      left: 16,
      top: "50%",
      width: 7,
      height: 7,
      borderRadius: "999px",
      backgroundColor: "#D71F36",
      transform: "translateY(-50%)",
      boxShadow: "0 0 0 4px rgba(215, 31, 54, 0.1)",
    },
  },
  figure: {
    m: 0,
    width: "100%",
  },
  imageGrid: {
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2, minmax(0, 1fr))",
      md: "repeat(4, minmax(0, 1fr))",
    },
    gap: 1.25,
    overflow: "hidden",
  },
  imageCell: {
    minWidth: 0,
    height: { xs: 150, sm: 190, md: 220 },
    boxSizing: "border-box",
    overflow: "hidden",
    borderRadius: "14px",
    backgroundColor: "#F3F4F6",
    border: "1px solid rgba(34, 52, 110, 0.12)",
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
  },
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    objectFit: "cover",
    transition: "transform 220ms ease",
    "&:hover": {
      transform: "scale(1.035)",
    },
  },
  inquiryCta: {
    mt: { xs: 5, md: 6 },
    p: { xs: 2.5, sm: 3, md: 3.5 },
    borderRadius: "16px",
    border: "1px solid rgba(34, 52, 110, 0.14)",
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
    textAlign: "center",
  },
  inquiryText: {
    color: "rgba(26, 26, 26, 0.82)",
    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.18rem" },
    fontWeight: 600,
    lineHeight: 1.6,
  },
  inquiryLink: {
    display: "inline-flex",
    color: "#22346E",
    fontWeight: 800,
    textDecoration: "none",
    borderBottom: "2px solid rgba(215, 31, 54, 0.45)",
    transition: "color 180ms ease, border-color 180ms ease",
    "&:hover": {
      color: "#D71F36",
      borderBottomColor: "#D71F36",
    },
    "&:focus-visible": {
      outline: "3px solid rgba(34, 52, 110, 0.22)",
      outlineOffset: "4px",
      borderRadius: "4px",
    },
  },
};

const ElectricalMaterialsAndEquipmentPage = () => {
  return (
    <Box component="main" sx={styles.page}>
      <Box
        component="section"
        aria-labelledby="electrical-materials-title"
        sx={styles.section}
      >
        <Box sx={styles.content}>
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
            We offer a complete range of power distribution and backup solutions
            designed for reliability and efficiency, engineered to meet diverse
            industrial and commercial requirements. Our lineup includes:
          </Typography>

          {productGroups.map((group, groupIndex) => (
            <Box
              key={group.id}
              component="article"
              aria-labelledby={`electrical-product-group-${group.id}`}
              sx={styles.group}
            >
              <Box sx={styles.groupHeader}>
                <Typography
                  id={`electrical-product-group-${group.id}`}
                  component="h2"
                  sx={styles.groupTitle}
                >
                  {group.title}
                </Typography>

                <Typography component="p" sx={styles.groupDescription}>
                  {group.description}
                </Typography>
              </Box>

              <Box component="ul" sx={styles.productList}>
                {group.products.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </Box>

              <Box component="figure" sx={styles.figure}>
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
                        sx={styles.image}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}

          <Box
            component="aside"
            aria-label="Electrical materials and equipment inquiry"
            sx={styles.inquiryCta}
          >
            <Typography component="p" sx={styles.inquiryText}>
              Looking for more Electrical Materials and Equipment?{" "}
              <Box component={Link} to="/#contact-us" sx={styles.inquiryLink}>
                Inquire Now!
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ElectricalMaterialsAndEquipmentPage;
