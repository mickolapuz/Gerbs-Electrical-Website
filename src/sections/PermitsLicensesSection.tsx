import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import GerbsLogo from "../assets/CompanyLogos/Gerb's Colored Icon+Typography.png";
import DTI from "../assets/PermitsLicenses/DTI.png";
import BIR from "../assets/PermitsLicenses/BIR.png";
import PCAB from "../assets/PermitsLicenses/PCAB.png";
import PHILGEPS from "../assets/PermitsLicenses/PHILGEPS.png";

interface MainContent {
  logo: string;
  text: string;
}

interface PermitAndLicense {
  id: number;
  logo: string;
  title: string;
  alt: string;
  text: string[];
}

const companyProfileUrl = "/company-profile-2026.pdf#page=28";

const mainContent: MainContent = {
  logo: GerbsLogo,
  text: "At Gerb’s Electrical Trading and Services, we operate as a fully legitimate and government-compliant contractor in the Philippines. Our company follows all required regulations, registrations, and accreditation processes to ensure that every project meets industry and safety standards. By strictly complying with government requirements and maintaining proper documentation, we provide our clients with reliable, transparent, and professional service, earning the trust and confidence of businesses and project owners who rely on us for quality construction and trading solutions.",
};

const permitsAndLicenses: PermitAndLicense[] = [
  {
    id: 1,
    logo: DTI,
    title: "DTI Registration",
    alt: "DTI business registration logo",
    text: [
      "Business Name No. 3167745",
      "Registered: June 18, 2002",
      "Scope: National",
    ],
  },
  {
    id: 2,
    logo: BIR,
    title: "BIR Certification",
    alt: "BIR certification logo",
    text: ["BIR Certified", "Trading and Services"],
  },
  {
    id: 3,
    logo: PCAB,
    title: "PCAB License",
    alt: "PCAB contractor license logo",
    text: [
      "Philippine Contractors Accreditation Board",
      "Contractor’s License No. 51183",
    ],
  },
  {
    id: 4,
    logo: PHILGEPS,
    title: "PhilGEPS Membership",
    alt: "PhilGEPS platinum membership logo",
    text: ["PhilGEPS Certified", "Platinum Membership"],
  },
];

const styles = {
  section: {
    width: "100%",
    minHeight: "50vh",
    py: { xs: 8, md: 12 },
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 45%, #FFFFFF 100%)",
    overflow: "hidden",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "0.95fr 1.05fr" },
    gap: { xs: 5, md: 7 },
    alignItems: "center",
  },

  leftContent: {
    textAlign: { xs: "center", lg: "left" },
  },

  logo: {
    width: { xs: 220, sm: 280, md: 340 },
    height: "auto",
    display: "block",
    mx: { xs: "auto", lg: 0 },
    mb: 3,
  },

  titleWrapper: {
    textAlign: { xs: "center", lg: "left" },
    mb: 2,
  },

  description: {
    maxWidth: 620,
    mx: { xs: "auto", lg: 0 },
    color: "text.secondary",
    lineHeight: 1.8,
    textAlign: { xs: "center", lg: "left" },
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: 2.5,
    listStyle: "none",
    p: 0,
    m: 0,
  },

  card: {
    height: "100%",
    borderRadius: 4,
    border: "1px solid rgba(34,52,110,0.10)",
    boxShadow: "0 14px 35px rgba(34,52,110,0.07)",
    backgroundColor: "#FFFFFF",
  },

  cardContent: {
    height: "100%",
    p: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  permitLogo: {
    width: { xs: 90, md: 110 },
    height: 80,
    objectFit: "contain",
    mb: 2,
  },

  permitTitle: {
    fontWeight: 700,
    color: "primary.main",
    mb: 1,
  },

  permitText: {
    color: "text.secondary",
    lineHeight: 1.6,
  },

  profileText: {
    mt: { xs: 5, md: 6 },
    color: "text.secondary",
    lineHeight: 1.7,
    textAlign: "left",
  },

  profileLink: {
    p: 0,
    border: 0,
    fontWeight: 700,
    color: "secondary.main",
    textDecoration: "none",
    cursor: "pointer",
    verticalAlign: "baseline",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  dialogTitle: {
    pr: 6,
    fontWeight: 700,
    color: "primary.main",
  },

  closeButton: {
    position: "absolute",
    right: 12,
    top: 10,
  },

  dialogContent: {
    p: 0,
    height: { xs: "75vh", md: "82vh" },
  },

  pdfPreview: {
    width: "100%",
    height: "100%",
    border: 0,
    display: "block",
  },
};

const PermitsLicensesSection = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <Box sx={styles.section}>
        <Container maxWidth="lg">
          <Box sx={styles.layout}>
            <Box sx={styles.leftContent}>
              <Box
                component="img"
                src={mainContent.logo}
                alt="Gerb's Electrical Trading and Services company logo"
                loading="lazy"
                decoding="async"
                sx={styles.logo}
              />

              <Box sx={styles.titleWrapper}>
                <Typography component="p" variant="overline" color="secondary">
                  Government Compliant Contractor
                </Typography>

                <Typography
                  component="h2"
                  variant="h2"
                  color="primary"
                  sx={{ mt: 1 }}
                >
                  Permits and Licenses
                </Typography>
              </Box>

              <Typography component="p" variant="body1" sx={styles.description}>
                {mainContent.text}
              </Typography>
            </Box>

            <Box
              component="ul"
              sx={styles.cardsGrid}
              aria-label="Company permits and licenses"
            >
              {permitsAndLicenses.map((permit) => (
                <Card component="li" key={permit.id} sx={styles.card}>
                  <CardContent sx={styles.cardContent}>
                    <Box
                      component="img"
                      src={permit.logo}
                      alt={permit.alt}
                      loading="lazy"
                      decoding="async"
                      sx={styles.permitLogo}
                    />

                    <Typography
                      component="h3"
                      variant="h6"
                      sx={styles.permitTitle}
                    >
                      {permit.title}
                    </Typography>

                    <Stack spacing={0.5}>
                      {permit.text.map((item) => (
                        <Typography
                          key={item}
                          component="p"
                          variant="body2"
                          sx={styles.permitText}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          <Typography component="p" variant="body2" sx={styles.profileText}>
            For more information about our permits and licenses, you can view
            our Company Profile{" "}
            <Link
              component="button"
              type="button"
              onClick={() => setIsProfileOpen(true)}
              sx={styles.profileLink}
            >
              here
            </Link>
            .
          </Typography>
        </Container>
      </Box>

      <Dialog
        open={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle sx={styles.dialogTitle}>
          Company Profile
          <IconButton
            aria-label="Close company profile preview"
            onClick={() => setIsProfileOpen(false)}
            sx={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={styles.dialogContent}>
          <Box
            component="iframe"
            src={companyProfileUrl}
            title="Gerb's Electrical Trading and Services Company Profile"
            sx={styles.pdfPreview}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PermitsLicensesSection;
