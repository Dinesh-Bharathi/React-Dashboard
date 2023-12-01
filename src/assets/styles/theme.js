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
          color: "#32325D",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#525F7F", // Label color for text fields
          display: "block",
          marginBottom: "8px",
          fontWeight: "500",
          fontSize: "14px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#8898AA", // Checkbox color
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#8898AA", // Set your custom checkbox color
          "&$checked": {
            color: "#aaa", // Set your custom checked checkbox color
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: "rgb(136, 152, 170)", // Set your custom color for the text value
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin: "0 0.5em",
        },
      },
    },
  },
});

export default theme;
