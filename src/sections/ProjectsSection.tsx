import { Box, Container, Stack, Typography } from "@mui/material";

import CivilWorks from "../assets/Projects/CivilWorks.png";
import ElectricalEquipment from "../assets/Projects/ElectricalEquipment.png";
import ElectricalFDASDesign from "../assets/Projects/ElectricalFDASDesign.png";
import ElectricalMechanicalCivilWorks from "../assets/Projects/ElectricalMechanicalCivilWorks.png";
import ElectricalWorks from "../assets/Projects/ElectricalWorks.png";
import FireProtectionWorks from "../assets/Projects/FireProtectionWorks.png";
import GeneralConstructionWorks from "../assets/Projects/GeneralConstructionWorks.jpg";
import PowerHouse from "../assets/Projects/PowerHouse.png";
import RoofingWorks from "../assets/Projects/RoofingWorks.jpg";
import SiteDevelopment from "../assets/Projects/SiteDevelopment.png";
import SupplyOfFurniture from "../assets/Projects/SupplyOfFurniture.png";
import SupplyOfMaterials from "../assets/Projects/SupplyOfMaterials.png";

const styles = {
  section: {
    width: "100%",
    minHeight: "50vh",
    py: { xs: 8, md: 12 },
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 45%, #FFFFFF 100%)",
    overflow: "hidden",
  },

  header: {
    maxWidth: 820,
    mx: "auto",
    textAlign: "center",
    mb: { xs: 6, md: 8 },
  },

  overline: {
    mb: 1.5,
    color: "#D71F36",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontSize: { xs: "0.75rem", md: "0.8rem" },
  },

  heading: {
    color: "#22346E",
    fontWeight: 800,
    fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
    lineHeight: 1.12,
    mb: 2,
  },

  description: {
    color: "text.secondary",
    fontSize: { xs: "1rem", md: "1.05rem" },
    lineHeight: 1.8,
  },

  categoryCard: {
    p: { xs: 2.5, md: 4 },
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(34,52,110,0.10)",
    boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
  },

  categoryHeader: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.4fr" },
    gap: { xs: 3, md: 5 },
    alignItems: "start",
    mb: { xs: 3.5, md: 5 },
  },

  categoryTitle: {
    color: "#22346E",
    fontWeight: 800,
    fontSize: { xs: "1.55rem", md: "2rem" },
    lineHeight: 1.2,
  },

  categoryDescriptionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  categoryDescription: {
    color: "text.secondary",
    fontSize: { xs: "0.95rem", md: "1rem" },
    lineHeight: 1.8,
  },

  projectsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(3, minmax(0, 1fr))",
    },
    gap: { xs: 2, md: 2.5 },
    listStyle: "none",
    p: 0,
    m: 0,
  },

  projectCard: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    overflow: "hidden",
    borderRadius: "16px",
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(34,52,110,0.10)",
    boxShadow: "0 6px 18px rgba(15,23,42,0.05)",
    transition: "transform 180ms ease",

    "@media (hover: hover)": {
      "&:hover": {
        transform: "translateY(-3px)",
      },
    },
  },

  imageWrapper: {
    width: "100%",
    aspectRatio: "16 / 10",
    backgroundColor: "rgba(34,52,110,0.06)",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  projectContent: {
    p: 2.25,
    flex: 1,
    display: "flex",
    alignItems: "center",
  },

  projectTitle: {
    color: "#22346E",
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: 1.45,
  },
};

interface FeaturedProject {
  id: number;
  picture: string;
  title: string;
}

interface ProjectCategory {
  id: number;
  slug: string;
  heading: string;
  description: string[];
  featuredProjects: FeaturedProject[];
}

const projectCategories: ProjectCategory[] = [
  {
    id: 1,
    slug: "industrial",
    heading: "Industrial Works",
    description: [
      "Our industrial portfolio reflects extensive experience in delivering reliable, high-performance solutions for a wide range of facilities. We have successfully completed numerous projects involving power distribution systems, electrical installations, equipment integration, and infrastructure works tailored to demanding industrial environments.",
      "With a strong focus on safety, efficiency, and compliance with industry standards, we ensure that every project is executed with precision and built to support continuous, heavy-duty operations. Our expertise allows us to adapt to complex requirements and provide dependable solutions that keep industrial operations running smoothly.",
    ],
    featuredProjects: [
      {
        id: 1,
        picture: ElectricalWorks,
        title: "Electrical Works",
      },
      {
        id: 2,
        picture: PowerHouse,
        title: "Power House",
      },
      {
        id: 3,
        picture: FireProtectionWorks,
        title: "Fire Protection Works",
      },
      {
        id: 4,
        picture: CivilWorks,
        title: "Civil Works",
      },
      {
        id: 5,
        picture: ElectricalEquipment,
        title: "Electrical Equipment",
      },
      {
        id: 6,
        picture: RoofingWorks,
        title: "Roofing Works",
      },
    ],
  },
  {
    id: 2,
    slug: "commercial-education-healthcare",
    heading: "Commercial / Education / Healthcare Works",
    description: [
      "We deliver reliable construction and engineering solutions for commercial establishments, educational institutions, and healthcare facilities. Our projects are designed to meet operational demands, safety standards, and long-term functionality while ensuring efficient and high-quality execution.",
    ],
    featuredProjects: [
      {
        id: 1,
        picture: SupplyOfMaterials,
        title: "Supply of Materials",
      },
      {
        id: 2,
        picture: ElectricalFDASDesign,
        title: "Electrical, Tel/Data, and FDAS Design",
      },
      {
        id: 3,
        picture: SiteDevelopment,
        title: "Electrical, Auxiliary, STP, Site Development, and CATV Works",
      },
      {
        id: 4,
        picture: ElectricalMechanicalCivilWorks,
        title: "Electrical, Mechanical, and Civil Works",
      },
      {
        id: 5,
        picture: SupplyOfFurniture,
        title: "Supply of Furniture",
      },
    ],
  },
  {
    id: 3,
    slug: "residential",
    heading: "Residential Works",
    description: [
      "We provide quality construction and engineering services for residential developments, creating safe, functional, and comfortable living spaces. From new homes to renovations and upgrades, we deliver practical and well-executed solutions tailored to our clients’ needs.",
    ],
    featuredProjects: [
      {
        id: 1,
        picture: GeneralConstructionWorks,
        title: "General Construction Works",
      },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <Box
      component="section"
      id="projects"
      aria-labelledby="projects-heading"
      sx={styles.section}
    >
      <Container maxWidth="lg">
        <Box sx={styles.header}>
          <Typography component="p" sx={styles.overline}>
            Our Projects
          </Typography>

          <Typography id="projects-heading" component="h2" sx={styles.heading}>
            Proven project experience across industrial, commercial, healthcare,
            education, and residential sectors
          </Typography>

          <Typography component="p" sx={styles.description}>
            Gerb&apos;s Electrical Trading and Services delivers dependable
            construction, electrical, auxiliary, civil, and engineering works
            built around safety, compliance, and long-term performance.
          </Typography>
        </Box>

        <Stack spacing={{ xs: 4, md: 5 }}>
          {projectCategories.map((category) => (
            <Box
              key={category.id}
              component="article"
              id={category.slug}
              aria-labelledby={`${category.slug}-heading`}
              sx={styles.categoryCard}
            >
              <Box sx={styles.categoryHeader}>
                <Typography
                  id={`${category.slug}-heading`}
                  component="h3"
                  sx={styles.categoryTitle}
                >
                  {category.heading}
                </Typography>

                <Box sx={styles.categoryDescriptionWrapper}>
                  {category.description.map((paragraph) => (
                    <Typography
                      key={paragraph}
                      component="p"
                      sx={styles.categoryDescription}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box
                component="ul"
                aria-label={`${category.heading} featured project types`}
                sx={styles.projectsGrid}
              >
                {category.featuredProjects.map((project) => (
                  <Box key={project.id} component="li">
                    <Box component="article" sx={styles.projectCard}>
                      <Box sx={styles.imageWrapper}>
                        <Box
                          component="img"
                          src={project.picture}
                          alt={`${project.title} project by Gerb's Electrical Trading and Services`}
                          loading="lazy"
                          decoding="async"
                          sx={styles.image}
                        />
                      </Box>

                      <Box sx={styles.projectContent}>
                        <Typography component="h4" sx={styles.projectTitle}>
                          {project.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
