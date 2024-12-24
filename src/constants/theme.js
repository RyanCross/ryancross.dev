import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#cb2368",
    },
    secondary: {
      main: "#1a5790",
    },
    text: {
      primary: "#901a5b",
      secondary: "#1a5790",
    },
  },
  typography: {
    fontFamily: "Raleway",
    h1: {
      fontFamily: "Cinzel",
    },
    h2: {
      fontFamily: "Cinzel",
    },
    h3: {
      fontFamily: "Cinzel",
    },
    h4: {
      fontFamily: "Cinzel",
    },
    h5: {
      fontFamily: "Cinzel",
    },
    button: {
      fontFamily: "Raleway",
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
};

export const theme = createTheme(themeOptions);
