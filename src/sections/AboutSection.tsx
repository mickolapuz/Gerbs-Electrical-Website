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

interface Description {
  id: number;
  text: string;
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

  descriptionContainer: {
    mt: 3,
    maxWidth: "900px",
    mx: "auto",
    px: { xs: 1, sm: 2 },
  },

  descriptionText: {
    color: "rgba(255,255,255,0.82)",
    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
    lineHeight: 1.9,
    mb: 2,
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
  },

  metricsBox: {
    width: "100%",
    minHeight: { xs: 118, sm: 125, md: 132 },
    textAlign: "center",
    px: { xs: 1.5, sm: 2 },
    py: { xs: 2.5, sm: 3 },
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  metricsValue: {
    fontSize: { xs: "1.65rem", sm: "2rem", md: "2.3rem" },
    fontWeight: 800,
    lineHeight: 1,
    color: "common.white",
  },

  metricsLabel: {
    mt: 1,
    fontSize: { xs: "0.78rem", sm: "0.95rem" },
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
    label: "Years of Experience",
  },
  {
    id: 2,
    value: "200+",
    label: "Total Projects Completed",
  },
  {
    id: 3,
    value: "₱250M",
    label: "Project Value Delivered",
  },
  {
    id: 4,
    value: "50+",
    label: "Clients Served",
  },
];

const missionVision: MissionVision[] = [
  {
    id: 1,
    title: "Mission",
    text: [
      "We specialize in electrical construction, general building, and engineering works, committed to delivering high-quality results that meet national and international standards.",
      "We value the expertise and experience of our workforce, leveraging their strengths to fulfill our responsibilities to clients and society. Through innovation and openness to better solutions, we continuously strive for excellence in every project.",
    ],
  },
  {
    id: 2,
    title: "Vision",
    text: [
      "Our vision is to be a leading force in the construction industry, delivering high-quality, reliable results that exceed client expectations.",
      "Our services reflect the standards we uphold and our commitment to supporting the Philippines’ growing industries—contributing to the nation’s progress and future as a leading economy in Asia.",
      "Guided by respect, leadership, integrity, and discipline, we strive to create efficient, meaningful, and rewarding partnerships—grounded in trust and driven by excellence, all for the Glory of God.",
    ],
  },
];

const description: Description[] = [
  {
    id: 1,
    text: "Gerb’s Electrical Trading and Services was organized on 18th of June 2002, solely owned and managed by Engineer Robelito P. Gerbise, therefore a 100% Filipino company. It has earned a good reputation in the electrical construction industry for strict adherence to professional, technical, and ethical standards.",
  },
  {
    id: 2,
    text: "Our company is engaged in commercial, industrial, and residential electrical works including its design and consultation.",
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

        <Box component="section" sx={styles.descriptionContainer}>
          {description.map((item) => (
            <Typography key={item.id} component="p" sx={styles.descriptionText}>
              {item.text}
            </Typography>
          ))}
        </Box>

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
            alt="Gerbs Electrical Trading and Services company logo"
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
