// themes.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ff5722", // Set the desired color for the secondary palette
      // You can also customize other properties like light, dark, contrastText, etc.
    },
  },
  components: {
    MuiCardHeader: {
      fontSize: "17px !important",
      color: "#172B4D",
      fontWeight: "600",
      styleOverrides: {
        root: {
          padding: "1em 2em", // Adjust the padding value according to your preference
        },
        title: {
          fontSize: "17px",
          fontWeight: 500, // Adjust the font size of the title
        },
      },
    },
  },
});

export default theme;
