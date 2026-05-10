import { Box, Container, Typography } from "@mui/material";

const ElectricalMaterialsAndEquipmentPage = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography component="h1" variant="h3" gutterBottom>
          Electrical Materials and Equipment
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Explore our electrical materials and equipment, including power
          distribution systems, panel boards, switchgear, transformers,
          generator sets, lighting equipment, wires, conduits, and circuit
          breakers.
        </Typography>
      </Container>
    </Box>
  );
};

export default ElectricalMaterialsAndEquipmentPage;
