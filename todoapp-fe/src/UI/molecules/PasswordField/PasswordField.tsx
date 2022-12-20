import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import "./PasswordField.scss";

interface PasswordFieldProps {
  label: string;
  variant: "outlined" | "filled" | "standard" | undefined;
  required?: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

interface PasswordFieldState {
  showPassword: boolean;
}

function PasswordField(props: PasswordFieldProps) {
  const [values, setValues] = React.useState<PasswordFieldState>({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  return (
    <TextField
      label={props.label}
      variant={props.variant}
      required={props.required}
      onChange={props.onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              className="PasswordField-icon-button"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordField;
