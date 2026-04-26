import { Box, type Theme, Container, Typography, Grid } from "@mui/material";

import GerbsIcon from "../assets/CompanyLogos/Gerb's White Icon+Typology.png";

interface Metric {
  id: number;
  value: string;
  label: string;
}

interface MissionVision {
  id: number;
  title: string;
  text: string[];
}

const styles = {
  container: (theme: Theme) => ({
    mt: { xs: 7 },
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
    borderTop: "1px solid rgba(255,255,255,0.65)",
    borderBottom: "1px solid rgba(34,52,110,0.06)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
  }),

  header: {
    color: "white",
    mt: 10,
    fontSize: { xs: "1.35rem", sm: "1.7rem", md: "2rem" },
    lineHeight: 1.2,
    maxWidth: "700px",
    mx: "auto",
  },
  overline: {
    mt: 1,
    fontWeight: 600,
    opacity: 0.95,
    fontSize: { xs: "1.15rem", md: "1.6rem" },
  },

  logo: {
    mt: { xs: 7, md: 13 },
    width: "clamp(240px, 78vw, 380px)",
    maxWidth: "100%",
    height: "auto",
    display: "block",
    mx: "auto",
  },
  metricsGrid: {
    display: "flex",
    justifyContent: "center",
  },
  metricsBox: {
    width: "100%",
    textAlign: "center",
    px: 2,
    py: 3,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(8px)",
  },
  metricsValue: {
    fontSize: { xs: "1.7rem", sm: "2rem", md: "2.3rem" },
    fontWeight: 800,
    lineHeight: 1,
    color: "common.white",
  },
  metricsLabel: {
    mt: 1,
    fontSize: { xs: "0.8rem", sm: "0.95rem" },
    lineHeight: 1.35,
    color: "rgba(255,255,255,0.78)",
    fontWeight: 500,
  },

  missionVisionBox: {
    height: "100%",
    textAlign: "left",
    px: { xs: 2.5, md: 4 },
    py: { xs: 3, md: 4 },
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(8px)",
  },
  missionVisionTitle: {
    fontWeight: 700,
    mb: 2,
  },
  missionVisionTextbox: {
    m: 0,
    pl: 2.5,
    color: "rgba(255,255,255,0.78)",
  },
  missionVisionText: {
    mb: 1,
    fontSize: { xs: "0.9rem", md: "1rem" },
    lineHeight: 1.7,
  },
};

const metrics: Metric[] = [
  {
    id: 1,
    value: "20+",
    label: "Years in the Industry",
  },
  {
    id: 2,
    value: "50+",
    label: "Completed Projects",
  },
  {
    id: 3,
    value: "100+",
    label: "Products Supplied",
  },
  {
    id: 4,
    value: "10+",
    label: "Clients Served",
  },
];

const missionVision: MissionVision[] = [
  {
    id: 1,
    title: "Mission",
    text: [
      "Deliver reliable and high-quality electrical products and services for every client need.",
      "Provide safe, efficient, and cost-effective solutions through skilled workmanship and integrity.",
      "Build long-term relationships through trust, professionalism, and consistent customer support.",
    ],
  },
  {
    id: 2,
    title: "Vision",
    text: [
      "To be a trusted leader in electrical trading and services recognized for excellence and innovation.",
      "To expand our reach while maintaining the highest standards of safety, quality, and service.",
      "To power homes, businesses, and industries with dependable solutions that create lasting value.",
    ],
  },
];

const AboutSection = () => {
  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h2" sx={styles.header}>
          About Gerbs Electrical Trading and Services
        </Typography>

        <Typography
          component="p"
          variant="h4"
          color="secondary"
          sx={styles.overline}
        >
          Built on Experience. Driven by Results.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          {metrics.map((metric) => (
            <Grid
              key={metric.id}
              component="article"
              size={{ xs: 6, lg: 3 }}
              sx={styles.metricsGrid}
            >
              <Box sx={styles.metricsBox}>
                <Typography component="p" sx={styles.metricsValue}>
                  {metric.value}
                </Typography>

                <Typography component="p" sx={styles.metricsLabel}>
                  {metric.label}
                </Typography>
              </Box>
            </Grid>
          ))}

          <Box
            component="img"
            src={GerbsIcon}
            alt="Gerbs Electrical Trading and Services"
            sx={styles.logo}
            loading="lazy"
          />

          <Grid container spacing={3} sx={{ mt: 1, mb: 8 }}>
            {missionVision.map((item) => (
              <Grid key={item.id} size={{ xs: 12, lg: 6 }}>
                <Box component="article" sx={styles.missionVisionBox}>
                  <Typography
                    component="h3"
                    variant="h4"
                    color="secondary"
                    sx={styles.missionVisionTitle}
                  >
                    {item.title}
                  </Typography>

                  <Box component="ul" sx={styles.missionVisionTextbox}>
                    {item.text.map((text) => (
                      <Typography
                        key={text}
                        component="li"
                        sx={styles.missionVisionText}
                      >
                        {text}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
