import { useState } from "react";
import { Box, Button, Container, Typography, type Theme } from "@mui/material";

import DesignPicture from "../assets/Services/Design.jpg";

interface ServiceItem {
  id: number;
  title: string;
  details?: string[];
}

interface DesignItem {
  id: number;
  description: string;
  children: string[];
}

const INITIAL_VISIBLE_SERVICES = 10;

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Electrical Works",
    details: ["Housing, building, commercial, and industrial works"],
  },
  {
    id: 2,
    title: "Auxiliary Works",
    details: [
      "Fire alarm system",
      "CCTV",
      "BGM system",
      "Telephone/Data system",
      "BMS",
    ],
  },
  { id: 3, title: "Telecommunication Systems" },
  {
    id: 4,
    title: "Masonry Works",
    details: ["Housing, building, commercial, and industrial works"],
  },
  {
    id: 5,
    title: "Metal Works",
    details: ["Steel, aluminum, and stainless"],
  },
  {
    id: 6,
    title: "Water Distribution Systems",
    details: ["Private and water districts"],
  },
  {
    id: 7,
    title: "Roofing",
    details: ["Specialized in asphalt shingles installation"],
  },
  {
    id: 8,
    title: "Finishing Works",
    details: [
      "Ceiling, wall, and floor works",
      "All interior finishings",
      "Fire resistance and isolation works",
      "Partition panel, skirting, moulding, gypsum, and silicate acoustic works",
      "Carpet, tiles, stones, raised floor, vinyl sheet, epoxy, floor coating, hardener, and FRP works",
    ],
  },
  {
    id: 9,
    title: "Painting Works",
    details: ["Internal and external painting works"],
  },
  {
    id: 10,
    title: "Miscellaneous Works",
    details: [
      "Waterproofing",
      "Water stopping",
      "Installation of steel and wooden doors",
      "Sealant anchor",
      "Cleaning",
    ],
  },
  { id: 11, title: "Glass and Aluminum Works" },
  {
    id: 12,
    title: "Materials Supply",
    details: [
      "Construction building supplies",
      "Electrical materials supplies",
      "Air conditioning units",
      "Security equipment",
      "Furniture",
    ],
  },
  { id: 13, title: "Planning & Engineering" },
  { id: 14, title: "Sanitary & Plumbing Works" },
  {
    id: 15,
    title: "Structural Steel, Structural Building, Civil and Mechanical Works",
  },
  {
    id: 16,
    title: "Fabrication Works",
    details: [
      "Steel trusses",
      "Overhead water tanks",
      "Steel railing",
      "Fire hose cabinet",
      "All iron works",
      "Panelboards and circuit breakers",
      "Switchgear and ATS",
      "Cable ladder",
    ],
  },
  {
    id: 17,
    title: "Fire Protection Works",
    details: [
      "Fire suppression",
      "Design and contractor of fire sprinkler system",
      "Design and contractor of automatic fire alarm and detection system",
    ],
  },
  { id: 18, title: "Tinsmith" },
  { id: 19, title: "Tiles Settings" },
  { id: 20, title: "Carpentry" },
  { id: 21, title: "Ceiling Works" },
  { id: 22, title: "Construction & Engineering Services" },
  { id: 23, title: "Design & Architectural Works" },
  { id: 24, title: "Water Treatment" },
];

const design: DesignItem = {
  id: 1,
  description:
    "Gerb’s Electrical Trading and Services delivers complete architectural and engineering design solutions with signed and sealed plans by licensed professionals. From concept to detailed drawings, we ensure code-compliant, efficient, and build-ready designs for residential, commercial, and industrial projects.",
  children: [
    "Professional Sign and Seal Services (Architectural and Engineering)",
    "Architectural Design",
    "Electrical Design",
    "Auxiliary Design",
    "FDAS Design",
    "Mechanical Design",
  ],
};

const styles = {
  container: (theme: Theme) => ({
    width: "100%",
    py: { xs: 8, md: 12 },
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
  }),

  header: {
    textAlign: "center",
    maxWidth: "850px",
    mx: "auto",
    mb: { xs: 5, md: 7 },
  },

  overline: {
    color: "secondary.main",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    mb: 1,
  },

  title: {
    color: "common.white",
    fontWeight: 800,
    fontSize: { xs: "2rem", md: "3rem" },
    lineHeight: 1.2,
    mb: 2,
  },

  description: {
    color: "rgba(255,255,255,0.78)",
    fontSize: { xs: "0.95rem", md: "1.05rem" },
    lineHeight: 1.8,
  },

  listWrapper: {
    maxWidth: "1100px",
    mx: "auto",
    borderRadius: 4,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    backgroundColor: "rgba(255,255,255,0.05)",
  },

  list: {
    m: 0,
    p: 0,
    listStyle: "none",
    columns: { xs: "1", md: "2" },
    columnGap: { md: 0 },
  },

  item: {
    display: "grid",
    gridTemplateColumns: { xs: "44px 1fr", md: "70px 1fr" },
    gap: 2,
    px: { xs: 2, md: 3 },
    py: { xs: 2, md: 2.3 },
    breakInside: "avoid",
    pageBreakInside: "avoid",
  },

  number: {
    color: "secondary.main",
    fontWeight: 800,
  },

  serviceTitle: {
    color: "common.white",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: { xs: "0.95rem", md: "1rem" },
  },

  subList: {
    mt: 1,
    pl: 2.5,
    color: "rgba(255,255,255,0.75)",
  },

  subItem: {
    mb: 0.7,
    fontSize: { xs: "0.9rem", md: "0.95rem" },
    lineHeight: 1.6,
  },

  buttonWrapper: {
    mt: 4,
    textAlign: "center",
  },

  seeMoreButton: {
    borderRadius: 999,
    px: 4,
    py: 1.3,
    color: "common.white",
    borderColor: "rgba(255,255,255,0.35)",
    textTransform: "none",
    fontWeight: 700,
    "&:hover": {
      borderColor: "secondary.main",
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  },

  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    m: "-1px",
    overflow: "hidden",
    p: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },

  designSection: {
    mt: { xs: 8, md: 12 },
    pt: { xs: 6, md: 8 },
    borderTop: "1px solid rgba(255,255,255,0.14)",
  },

  designCard: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
    alignItems: "stretch",
    borderRadius: { xs: 4, md: 5 },
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.14)",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
    textAlign: "left",
  },

  designContent: {
    p: { xs: 3, sm: 4, md: 6 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  designImageWrapper: {
    minHeight: { xs: 260, sm: 340, md: 520 },
    height: "100%",
    overflow: "hidden",
  },

  designImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  designOverline: {
    color: "secondary.main",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    mb: 1,
  },

  designTitle: {
    color: "common.white",
    fontWeight: 800,
    fontSize: { xs: "1.7rem", md: "2.6rem" },
    lineHeight: 1.15,
    mb: 2,
    maxWidth: "620px",
  },

  designDescription: {
    color: "rgba(255,255,255,0.78)",
    fontSize: { xs: "0.95rem", md: "1.05rem" },
    lineHeight: 1.8,
    mb: 3,
    maxWidth: "650px",
  },

  designList: {
    m: 0,
    p: 0,
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: { xs: 1.4, md: 1.7 },
  },

  designListItem: {
    position: "relative",
    pl: 3,
    color: "rgba(255,255,255,0.88)",
    fontSize: { xs: "0.92rem", md: "0.98rem" },
    lineHeight: 1.6,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "0.72em",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "secondary.main",
    },
  },
};

const ServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const visibleServices = showAllServices
    ? services
    : services.slice(0, INITIAL_VISIBLE_SERVICES);

  const hiddenServices = services.slice(INITIAL_VISIBLE_SERVICES);

  return (
    <Box
      component="section"
      id="services"
      aria-labelledby="services-heading"
      sx={styles.container}
    >
      <Container maxWidth="lg">
        <Box component="header" sx={styles.header}>
          <Typography component="p" sx={styles.overline}>
            Our Services
          </Typography>

          <Typography component="h2" id="services-heading" sx={styles.title}>
            Complete Electrical, Construction, and Engineering Services
          </Typography>

          <Typography component="p" sx={styles.description}>
            Gerb’s Electrical Trading and Services provides electrical works,
            construction services, engineering solutions, design, maintenance,
            supply, transmission, distribution, and instrumentation support for
            commercial, industrial, and residential projects.
          </Typography>
        </Box>

        <Box sx={styles.listWrapper} id="services-list">
          <Box component="ol" sx={styles.list}>
            {visibleServices.map((service) => (
              <Box component="li" key={service.id} sx={styles.item}>
                <Typography component="span" sx={styles.number}>
                  {String(service.id).padStart(2, "0")}
                </Typography>

                <Box>
                  <Typography component="h3" sx={styles.serviceTitle}>
                    {service.title}
                  </Typography>

                  {service.details && (
                    <Box component="ul" sx={styles.subList}>
                      {service.details.map((detail) => (
                        <Typography
                          key={detail}
                          component="li"
                          sx={styles.subItem}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {!showAllServices && (
          <Box component="div" sx={styles.visuallyHidden}>
            <Typography component="h3">
              Additional services offered by Gerb’s Electrical Trading and
              Services
            </Typography>

            <Box component="ul">
              {hiddenServices.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </Box>
          </Box>
        )}

        <Box sx={styles.buttonWrapper}>
          <Button
            type="button"
            variant="outlined"
            sx={styles.seeMoreButton}
            onClick={() => setShowAllServices((prev) => !prev)}
            aria-expanded={showAllServices}
            aria-controls="services-list"
            aria-label={
              showAllServices
                ? "Show fewer services offered by Gerbs Electrical Trading and Services"
                : "See more services offered by Gerbs Electrical Trading and Services"
            }
          >
            {showAllServices
              ? "Show less services"
              : "See more services offered"}
          </Button>
        </Box>

        <Box
          id="design"
          component="article"
          aria-labelledby="design-services-heading"
          sx={styles.designSection}
        >
          <Box sx={styles.designCard}>
            <Box sx={styles.designContent}>
              <Typography component="p" sx={styles.designOverline}>
                Design Services
              </Typography>

              <Typography
                component="h3"
                id="design-services-heading"
                sx={styles.designTitle}
              >
                Architectural and Engineering Design Solutions
              </Typography>

              <Typography component="p" sx={styles.designDescription}>
                {design.description}
              </Typography>

              <Box component="ul" sx={styles.designList}>
                {design.children.map((item) => (
                  <Typography
                    key={item}
                    component="li"
                    sx={styles.designListItem}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box sx={styles.designImageWrapper}>
              <Box
                component="img"
                src={DesignPicture}
                alt="Architectural and engineering design planning services"
                loading="lazy"
                sx={styles.designImage}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
