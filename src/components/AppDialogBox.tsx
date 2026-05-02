import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  type DialogProps,
} from "@mui/material";

interface AppDialogBoxProps extends Omit<DialogProps, "title" | "content"> {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

const AppDialogBox = ({
  open,
  title,
  message,
  confirmText = "OK",
  onClose,
  onConfirm,
  maxWidth = "xs",
  fullWidth = true,
  ...props
}: AppDialogBoxProps) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
      return;
    }

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "4px",
            p: { xs: 2.25, sm: 2.5 },
            border: "1px solid rgba(34, 52, 110, 0.08)",
            boxShadow: "0 24px 70px rgba(34, 52, 110, 0.22)",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.99) 0%, rgba(249,250,251,0.98) 100%)",
          },
        },
      }}
      {...props}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography
          component="h2"
          variant="h6"
          sx={{
            color: "primary.main",
            fontWeight: 800,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <IconButton
          aria-label="Close dialog"
          onClick={onClose}
          size="small"
          sx={{
            color: "text.secondary",
            border: "none",
            backgroundColor: "transparent",
            borderRadius: "4px",

            "&:hover": {
              backgroundColor: "rgba(34, 52, 110, 0.06)",
              color: "primary.main",
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: "8px",
            border: "1px solid rgba(34, 52, 110, 0.12)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)",
          }}
        >
          <Typography
            component="p"
            variant="body1"
            sx={{
              color: "text.primary",
              lineHeight: 1.7,
            }}
          >
            {message}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          p: 0,
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleConfirm}
          sx={{
            borderRadius: "4px",
            px: 4,
            py: 0.9,
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppDialogBox;
