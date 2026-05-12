import { Button, type ButtonProps } from "@mui/material";

interface AppButtonProps extends Omit<ButtonProps, "children"> {
  label: string;
}

const AppButton = ({
  label,
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled = false,
  disableElevation = true,
  ...props
}: AppButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      disableElevation={disableElevation}
      {...props}
    >
      {label}
    </Button>
  );
};

export default AppButton;
