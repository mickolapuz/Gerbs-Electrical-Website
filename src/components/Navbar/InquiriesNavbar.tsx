import { Box, Container, Link, Stack, Typography } from "@mui/material";

interface Inquiries {
  id: number;
  title: string;
  type: "phone" | "email";
  children: string[];
}

const inquiries: Inquiries[] = [
  {
    id: 1,
    title: "Contact Number:",
    type: "phone",
    children: [
      "+63 917 174 3129 (Engr. Robelito Gerbise)",
      "+63 995 957 8190 (Engr. Elaijah Gerbise)",
    ],
  },
  {
    id: 2,
    title: "Email:",
    type: "email",
    children: ["gerbs2002@yahoo.com", "elaijahgerbise.gerbs@gmail.com"],
  },
];

const styles = {
  root: {
    width: "100%",
    backgroundColor: "primary.main",
    color: "common.white",
    py: { xs: 1.25, lg: 1 },
  },
  container: {
    display: "flex",
    justifyContent: { xs: "center", lg: "space-between" },
    alignItems: "center",
    gap: { xs: 1.5, lg: 4 },
    flexDirection: { xs: "column", lg: "row" },
    textAlign: { xs: "center", lg: "left" },
  },
  group: {
    display: "flex",
    alignItems: { xs: "center", lg: "baseline" },
    justifyContent: "center",
    flexDirection: { xs: "column", lg: "row" },
    gap: { xs: 0.5, lg: 1 },
    width: { xs: "100%", lg: "auto" },
  },
  title: {
    fontWeight: 700,
    fontSize: { xs: "0.78rem", sm: "0.8rem", lg: "0.85rem" },
    lineHeight: 1.4,
    whiteSpace: "nowrap",
    fontStyle: "normal",
  },
  list: {
    m: 0,
    p: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    gap: { xs: 0.35, sm: 1.25, lg: 1.5 },
  },
  listItem: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: 1.25,
  },
  link: {
    color: "rgba(255,255,255,0.9)",
    fontSize: { xs: "0.76rem", sm: "0.78rem", lg: "0.82rem" },
    lineHeight: 1.4,
    textDecoration: "none",
    transition: "color 0.2s ease",
    fontStyle: "normal",
    whiteSpace: { xs: "normal", sm: "nowrap" },
    overflowWrap: "anywhere",
    "&:hover": {
      color: "common.white",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
    "&:focus-visible": {
      outline: "2px solid currentColor",
      outlineOffset: "3px",
      borderRadius: "4px",
    },
  },
  separator: {
    color: "rgba(255,255,255,0.55)",
    fontSize: { xs: "0.75rem", lg: "0.82rem" },
    lineHeight: 1,
    display: { xs: "none", sm: "inline-flex" },
  },
};

const formatPhoneHref = (value: string) => {
  return `tel:${value.replace(/[^\d+]/g, "")}`;
};

const getHref = (type: Inquiries["type"], value: string) => {
  if (type === "email") {
    return `mailto:${value}`;
  }

  return formatPhoneHref(value);
};

const getAriaLabel = (type: Inquiries["type"], value: string) => {
  if (type === "email") {
    return `Email Gerbs Electrical Trading and Services at ${value}`;
  }

  return `Call Gerbs Electrical Trading and Services at ${value}`;
};

const InquiriesNavbar = () => {
  return (
    <Box
      component="aside"
      aria-label="Gerbs Electrical Trading and Services inquiry details"
      sx={styles.root}
    >
      <Container maxWidth="lg" sx={styles.container}>
        {inquiries.map((item) => (
          <Box
            key={item.id}
            component="address"
            aria-label={item.title.replace(":", "")}
            sx={styles.group}
          >
            <Typography component="p" sx={styles.title}>
              {item.title}
            </Typography>

            <Stack component="ul" sx={styles.list}>
              {item.children.map((child, index) => (
                <Box key={child} component="li" sx={styles.listItem}>
                  <Link
                    href={getHref(item.type, child)}
                    aria-label={getAriaLabel(item.type, child)}
                    sx={styles.link}
                  >
                    {child}
                  </Link>

                  {index < item.children.length - 1 && (
                    <Typography
                      component="span"
                      aria-hidden="true"
                      sx={styles.separator}
                    >
                      |
                    </Typography>
                  )}
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default InquiriesNavbar;
