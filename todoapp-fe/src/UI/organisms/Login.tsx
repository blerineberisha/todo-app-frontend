import {
  Button,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/system";
import "./Login.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Theme";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface State {
  password: string;
  showPassword: boolean;
}

function Login() {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className="Login-paper">
        <Stack className="Login-container">
          <h1 className="Login-header">Login</h1>
          <TextField label="Username" variant="outlined" />
          <FormControl>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button className="Login-button" variant="contained" size="large">
            SIGN IN
          </Button>
          <Divider className="Login-divider">OR</Divider>
          <Button
            className="Login-button"
            id="LoginSignUpButton"
            variant="contained"
            size="large"
          >
            SIGN UP
          </Button>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}

export default Login;
