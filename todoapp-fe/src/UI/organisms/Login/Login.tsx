import { Button, TextField, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/system";
import "./Login.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Paper className="Login-paper">
        <Stack className="Login-container">
          <h1 className="Login-header">Login</h1>
          <TextField
            label="Username"
            variant="outlined"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="Login-button" variant="contained" size="large">
            SIGN IN
          </Button>
          <Divider className="Login-divider">OR</Divider>
          <Button
            className="Login-button-signup"
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