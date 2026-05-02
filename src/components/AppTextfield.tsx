import { TextField, type TextFieldProps } from "@mui/material";

type AppTextfieldProps = TextFieldProps & {
  label: string;
};

const AppTextfield = ({
  label,
  fullWidth = true,
  variant = "outlined",
  ...props
}: AppTextfieldProps) => {
  return (
    <TextField
      label={label}
      fullWidth={fullWidth}
      variant={variant}
      {...props}
    />
  );
};

export default AppTextfield;
