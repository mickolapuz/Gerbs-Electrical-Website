import { Box, Container, Typography } from "@mui/material";

const SafetyAndSecurityPage = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography component="h1" variant="h3" gutterBottom>
          Safety and Security Products
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Explore our range of safety and security solutions, including metal
          detection systems, X-ray baggage scanners, CCTV systems, access
          control devices, parking barriers, turnstiles, and entrance control
          systems.
        </Typography>
      </Container>
    </Box>
  );
};

export default SafetyAndSecurityPage;
