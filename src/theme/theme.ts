import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080", // Teal
    },
    secondary: {
      main: "#20B2AA", // Light Teal
    },
    background: {
      default: "#FFFFFF", // White background
      paper: "#F0F0F0", // Soft Gray for paper-like elements
    },
    text: {
      primary: "#333333", // Dark Gray for text
      secondary: "#808080", // Light Gray for descriptions
    },
  },
});

export default theme;
