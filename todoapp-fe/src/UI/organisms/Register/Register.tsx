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
import "./Register.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme";
import React, { useState } from "react";
import { Mail, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordField from "../../molecules/PasswordField/PasswordField";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Paper className="Register-paper">
        <Stack className="Register-container">
          <h1 className="Register-header">Sign Up</h1>
          <Stack className="Register-name-container">
            <TextField
              label="First Name"
              variant="outlined"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </Stack>
          <TextField
            label="Email"
            variant="outlined"
            required
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: <Mail className="Register-textfield-icon" />,
            }}
          />
          <TextField
            label="Username"
            variant="outlined"
            required
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              endAdornment: <Person className="Register-textfield-icon" />,
            }}
          />
          <PasswordField
            label="Password"
            variant="outlined"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordField
            label="Repeat Password"
            variant="outlined"
            required
            onChange={(e) => setRepeatedPassword(e.target.value)}
          />
          <Button className="Register-button" variant="contained" size="large">
            SIGN IN
          </Button>
          <Divider className="Register-divider">OR</Divider>
          <Button
            className="Register-button-signup"
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

export default Register;
