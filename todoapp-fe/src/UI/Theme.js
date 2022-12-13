import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#49B093",
      main: "#0B926D",
      dark: "#037555",
    },
    error: {
      main: "#801515",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default theme;
