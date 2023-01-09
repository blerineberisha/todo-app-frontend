import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import "./PasswordField.scss";

interface PasswordFieldProps {
  label: string;
  variant: "outlined" | "filled" | "standard" | undefined;
  required?: boolean;
  helperText?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  validatePassword?: (password: string) => boolean;
}

function PasswordField(props: PasswordFieldProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
    props.onChange?.(event);
  };

  const handleKeyUp = () => {
    if (!!props.validatePassword) {
      setPasswordValid(props.validatePassword(password));
    } else {
      setPasswordValid(defaultValidatePassword(password));
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const defaultValidatePassword = (password: string) => {
    return (
      password.length >= 8 &&
      !!password.match(/\d+/) &&
      !!password.match(/[a-z]+/) &&
      !!password.match(/[A-Z]+/) &&
      !!password.match(/\W+/)
    );
  };

  return (
    <TextField
      label={props.label}
      variant={props.variant}
      required={props.required}
      onChange={handlePasswordChange}
      onKeyUp={handleKeyUp}
      error={!passwordValid && !!password}
      helperText={
        !passwordValid && !!password
          ? props.helperText ||
            "Password needs to be at least 8 characters long, contain one lower/uppercase character, a number and a special character"
          : null
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              className="PasswordField-icon-button"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
        type: showPassword ? "text" : "password",
      }}
    />
  );
}

export default PasswordField;
