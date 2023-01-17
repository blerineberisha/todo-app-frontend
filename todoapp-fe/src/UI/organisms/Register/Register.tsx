import {
  Button,
  TextField,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/system";
import "./Register.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme";
import { useState } from "react";
import { Mail, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import { Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import { RegisterDto } from "../../../models/RegisterDto.model";

function Register() {
  const initialValues: RegisterDto = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const registerSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(1)
      .max(40)
      .required("Please enter your firstname"),
    lastname: yup
      .string()
      .min(1)
      .max(40)
      .required("Please enter your lastname"),
    email: yup
      .string()
      .required("Please enter your email")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email"
      ),
    username: yup.string().min(3).max(20).required("Please enter a username"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please repeat your password"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleClickShowPasswordConfirmation() {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log(values, "initialvalues");
      }}
    >
      {(props: FormikProps<RegisterDto>) => {
        const {
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
          isValid,
        } = props;
        return (
          <ThemeProvider theme={theme}>
            <Paper className="Register-paper">
              <Form>
                <Stack className="Register-container">
                  <h1 className="Register-header">Sign Up</h1>
                  <Stack className="Register-name-container">
                    <TextField
                      id="firstname"
                      label="First Name"
                      variant="outlined"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!(errors.firstname && touched.firstname)}
                      helperText={
                        errors.firstname && touched.firstname
                          ? errors.firstname
                          : null
                      }
                    />
                    <TextField
                      id="lastname"
                      label="Last Name"
                      variant="outlined"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!(errors.lastname && touched.lastname)}
                      helperText={
                        errors.lastname && touched.lastname
                          ? errors.lastname
                          : null
                      }
                    />
                  </Stack>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.email && touched.email)}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    InputProps={{
                      endAdornment: (
                        <Mail className="Register-textfield-icon" />
                      ),
                    }}
                  />
                  <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.username && touched.username)}
                    helperText={
                      errors.username && touched.username
                        ? errors.username
                        : null
                    }
                    InputProps={{
                      endAdornment: (
                        <Person className="Register-textfield-icon" />
                      ),
                    }}
                  />
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!(errors.password && touched.password)}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
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
                  <TextField
                    id="passwordConfirmation"
                    label="Repeat Password"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      !!(
                        errors.passwordConfirmation &&
                        touched.passwordConfirmation
                      )
                    }
                    helperText={
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation
                        ? errors.passwordConfirmation
                        : null
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            className="PasswordField-icon-button"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordConfirmation}
                            edge="end"
                          >
                            {showPasswordConfirmation ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                      type: showPasswordConfirmation ? "text" : "password",
                    }}
                  />
                  <Button
                    className="Register-button"
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    SIGN UP
                  </Button>
                  <Divider className="Register-divider">OR</Divider>
                  <Button
                    className="Register-button-signup"
                    variant="contained"
                    size="large"
                  >
                    SIGN IN
                  </Button>
                </Stack>
              </Form>
            </Paper>
          </ThemeProvider>
        );
      }}
    </Formik>
  );
}

export default Register;
