import type { SvgIconComponent } from "@mui/icons-material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import { useRef, useState, type FormEvent } from "react";
import AppButton from "../components/AppButton";
import AppDialogBox from "../components/AppDialogBox";
import AppTextfield from "../components/AppTextfield";
import { sendEmailForm } from "../utils/emailHelper";

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #F9FAFB 0%, #EEF3FB 45%, #FFFFFF 100%)",
    overflow: "hidden",
    py: { xs: 7, md: 10, lg: 12 },
  },

  contentWrapper: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "1.05fr 0.95fr",
    },
    gap: { xs: 4, lg: 6, xl: 7 },
    alignItems: {
      xs: "start",
      lg: "stretch",
    },
  },

  leftColumn: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  sectionHeader: {
    mb: { xs: 3, md: 4 },
  },

  overline: {
    color: "secondary.main",
    fontWeight: 700,
    letterSpacing: 2,
  },

  title: {
    color: "primary.main",
    fontWeight: 800,
    mt: 1,
    maxWidth: 620,
  },

  description: {
    color: "text.secondary",
    maxWidth: 650,
    mt: 1.5,
    lineHeight: 1.7,
  },

  contactCardsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "repeat(2, minmax(0, 1fr))",
    },
    gap: { xs: 2, md: 2.5 },
    alignItems: "stretch",
  },

  contactCard: {
    width: "100%",
    minHeight: {
      xs: 210,
      sm: 190,
      md: 230,
      lg: 245,
      xl: 255,
    },
    p: { xs: 2.5, md: 3, lg: 3.25 },
    borderRadius: 4,
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(34, 52, 110, 0.1)",
    boxShadow: "0 18px 45px rgba(34, 52, 110, 0.08)",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.95) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    transition:
      "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 5,
      background: "linear-gradient(90deg, #22346E 0%, #D71F36 100%)",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      right: -45,
      bottom: -45,
      width: 130,
      height: 130,
      borderRadius: "50%",
      background: "rgba(34, 52, 110, 0.055)",
    },

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 24px 60px rgba(34, 52, 110, 0.13)",
      borderColor: "rgba(34, 52, 110, 0.18)",
    },
  },

  contactCardContent: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  contactCardIcon: {
    width: 42,
    height: 42,
    minWidth: 42,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 2,
    color: "primary.main",
    backgroundColor: "rgba(34, 52, 110, 0.08)",
    border: "1px solid rgba(34, 52, 110, 0.1)",

    "& svg": {
      fontSize: 22,
    },
  },

  contactCardTitle: {
    color: "primary.main",
    fontWeight: 800,
    mb: 1,
    lineHeight: 1.25,
  },

  contactAddress: {
    fontStyle: "normal",
  },

  contactCardText: {
    color: "text.secondary",
    lineHeight: 1.65,
    wordBreak: "break-word",
    overflowWrap: "anywhere",
  },

  contactCardLink: {
    color: "text.secondary",
    lineHeight: 1.65,
    textDecoration: "none",
    wordBreak: "break-word",
    overflowWrap: "anywhere",

    "&:hover": {
      color: "primary.main",
      textDecoration: "underline",
    },

    "&:focus-visible": {
      outline: "2px solid rgba(34, 52, 110, 0.45)",
      outlineOffset: 3,
      borderRadius: 1,
    },
  },

  formCard: {
    height: {
      xs: "auto",
      lg: "100%",
    },
    p: { xs: 2.5, md: 4 },
    borderRadius: 4,
    border: "1px solid rgba(34, 52, 110, 0.1)",
    boxShadow: "0 22px 55px rgba(34, 52, 110, 0.1)",
    backgroundColor: "background.paper",
    display: "flex",
    flexDirection: "column",
  },

  formTitle: {
    color: "primary.main",
    fontWeight: 800,
    mb: 1,
  },

  formDescription: {
    color: "text.secondary",
    mb: 3,
    lineHeight: 1.7,
  },

  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gap: 2,
  },

  fullWidthField: {
    gridColumn: {
      xs: "auto",
      md: "1 / -1",
    },
  },

  submitWrapper: {
    mt: {
      xs: 3,
      lg: "auto",
    },
    pt: {
      xs: 0,
      lg: 3,
    },
    display: "flex",
    justifyContent: {
      xs: "stretch",
      sm: "flex-end",
    },

    "& button": {
      width: {
        xs: "100%",
        sm: "auto",
      },
    },
  },
};

type ContactType = "mobile" | "telephone" | "email" | "address";

interface ContactField {
  id: number;
  title: string;
  type: ContactType;
  children: string[];
  icon: SvgIconComponent;
}

interface RequestForm {
  id: number;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  required?: boolean;
  sx?: SxProps<Theme>;
}

interface DialogState {
  open: boolean;
  title: string;
  message: string;
}

const contactFields: ContactField[] = [
  {
    id: 1,
    title: "Mobile / Viber / WhatsApp",
    type: "mobile",
    icon: PhoneIphoneOutlinedIcon,
    children: [
      "+63 917 174 3129 (Engr. Robelito Gerbise)",
      "+63 995 957 8190 (Engr. Elaijah Gerbise)",
    ],
  },
  {
    id: 2,
    title: "Telephone",
    type: "telephone",
    icon: LocalPhoneOutlinedIcon,
    children: ["02 8846 2994 (Office Tel. No.)"],
  },
  {
    id: 3,
    title: "Email",
    type: "email",
    icon: EmailOutlinedIcon,
    children: ["gerbs2002@yahoo.com", "elaijahgerbise.gerbs@gmail.com"],
  },
  {
    id: 4,
    title: "Company Address",
    type: "address",
    icon: LocationOnOutlinedIcon,
    children: ["4931-B Rosal Street, Marimar Village, Paranaque City 1700"],
  },
];

const requestForm: RequestForm[] = [
  {
    id: 1,
    label: "Name",
    name: "customer_name",
    autoComplete: "name",
    required: true,
  },
  {
    id: 2,
    label: "Contact Number",
    name: "customer_phone",
    type: "tel",
    autoComplete: "tel",
    required: true,
  },
  {
    id: 3,
    label: "Email Address",
    name: "customer_email",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    id: 4,
    label: "Company Name",
    name: "company_name",
    autoComplete: "organization",
  },
  {
    id: 5,
    label: "Company Address",
    name: "company_address",
    autoComplete: "street-address",
    fullWidth: true,
  },
  {
    id: 6,
    label: "Project Address",
    name: "project_address",
    fullWidth: true,
  },
  {
    id: 7,
    label: "Project Description",
    name: "project_description",
    multiline: true,
    rows: 8,
    fullWidth: true,
    required: true,
    sx: {
      "& .MuiInputBase-root": {
        minHeight: {
          xs: 140,
          lg: 260,
          xl: 250,
        },
        alignItems: "flex-start",
      },
    },
  },
];

const getPhoneHref = (value: string) => {
  const phoneNumber = value.split("(")[0].replace(/\D/g, "");

  return `tel:+${phoneNumber}`;
};

const getContactHref = (type: ContactType, value: string) => {
  if (type === "email") {
    return `mailto:${value}`;
  }

  if (type === "mobile" || type === "telephone") {
    return getPhoneHref(value);
  }

  return undefined;
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dialog, setDialog] = useState<DialogState>({
    open: false,
    title: "",
    message: "",
  });

  const handleCloseDialog = () => {
    setDialog((currentDialog) => ({
      ...currentDialog,
      open: false,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await sendEmailForm(formRef.current);

      formRef.current.reset();

      setDialog({
        open: true,
        title: "Inquiry Sent",
        message:
          "Thank you. Your inquiry has been sent successfully. Our team will get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setDialog({
        open: true,
        title: "Message Not Sent",
        message:
          "Sorry, something went wrong while sending your inquiry. Please try again or contact us directly through phone, Viber, WhatsApp, or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Box
        component="section"
        id="contact-us"
        aria-labelledby="contact-us-title"
        sx={styles.container}
      >
        <Container maxWidth="xl">
          <Box sx={styles.contentWrapper}>
            <Box sx={styles.leftColumn}>
              <Box component="header" sx={styles.sectionHeader}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={styles.overline}
                >
                  Contact Us
                </Typography>

                <Typography
                  id="contact-us-title"
                  component="h2"
                  variant="h2"
                  sx={styles.title}
                >
                  Let&apos;s discuss your electrical requirements.
                </Typography>

                <Typography
                  component="p"
                  variant="body1"
                  sx={styles.description}
                >
                  Reach out to Gerb&apos;s Electrical Trading and Services for
                  electrical products, installation services, permits
                  assistance, estimates, and project inquiries.
                </Typography>
              </Box>

              <Box sx={styles.contactCardsGrid}>
                {contactFields.map((field) => {
                  const Icon = field.icon;

                  return (
                    <Paper
                      key={field.id}
                      component="article"
                      elevation={0}
                      sx={styles.contactCard}
                    >
                      <Box sx={styles.contactCardContent}>
                        <Box sx={styles.contactCardIcon} aria-hidden="true">
                          <Icon />
                        </Box>

                        <Typography
                          component="h3"
                          variant="subtitle1"
                          sx={styles.contactCardTitle}
                        >
                          {field.title}
                        </Typography>

                        <Stack
                          component="address"
                          spacing={0.5}
                          sx={styles.contactAddress}
                        >
                          {field.children.map((item) => {
                            const href = getContactHref(field.type, item);

                            if (!href) {
                              return (
                                <Typography
                                  key={item}
                                  component="p"
                                  variant="body2"
                                  sx={styles.contactCardText}
                                >
                                  {item}
                                </Typography>
                              );
                            }

                            return (
                              <Typography
                                key={item}
                                component="a"
                                href={href}
                                variant="body2"
                                sx={styles.contactCardLink}
                                aria-label={`${field.title}: ${item}`}
                              >
                                {item}
                              </Typography>
                            );
                          })}
                        </Stack>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </Box>

            <Paper
              component="article"
              elevation={0}
              aria-labelledby="request-quote-title"
              sx={styles.formCard}
            >
              <Typography
                id="request-quote-title"
                component="h3"
                variant="h4"
                sx={styles.formTitle}
              >
                Request a Quote
              </Typography>

              <Typography
                component="p"
                variant="body2"
                sx={styles.formDescription}
              >
                Fill out the form below and our team will get back to you as
                soon as possible.
              </Typography>

              <Box
                component="form"
                ref={formRef}
                sx={styles.form}
                onSubmit={handleSubmit}
                aria-label="Request a quote form"
              >
                <Box sx={styles.formGrid}>
                  {requestForm.map((field) => (
                    <Box
                      key={field.id}
                      sx={field.fullWidth ? styles.fullWidthField : undefined}
                    >
                      <AppTextfield
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        multiline={field.multiline}
                        rows={field.rows}
                        required={field.required}
                        sx={field.sx}
                      />
                    </Box>
                  ))}
                </Box>

                <Box sx={styles.submitWrapper}>
                  <AppButton
                    type="submit"
                    label={isSubmitting ? "Sending..." : "Submit Request"}
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  />
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      <AppDialogBox
        open={dialog.open}
        title={dialog.title}
        message={dialog.message}
        confirmText="OK"
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default ContactSection;
