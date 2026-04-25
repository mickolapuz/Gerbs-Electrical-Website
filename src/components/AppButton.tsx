import { Button } from "@mui/material";

interface AppButtonProps {
  label: string;
  variant: "text" | "contained" | "outlined";
  disabled?: boolean;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  color: string;
}

const AppButton = (props: AppButtonProps) => {
  const {
    label,
    variant,
    disabled = false,
    onClick,
    size = "medium",
    startIcon = null,
    endIcon = null,
    loading,
    color,
  } = props;

  return (
    <>
      <Button
        variant={variant}
        disabled={disabled}
        disableElevation
        onClick={onClick}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        loading={loading}
        color={color}
      >
        {label}
      </Button>
    </>
  );
};

export default AppButton;
