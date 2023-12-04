import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import theme from "../assets/styles/theme";

const MapOne = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125304.61437334245!2d77.021184!3d11.0559232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701688642422!5m2!1sen!2sin"
      width="100%"
      height="500"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border: "none", borderRadius: "6px" }}
    ></iframe>
  );
};
const GoogleMaps = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgb(17, 205, 239) 40vh, rgb(245, 245, 255) 40vh)`,
        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BreadCrumbs
          title={
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "20px" } }}>
              Google maps
            </Typography>
          }
          firstLink={"Maps"}
          secondLink={"Google maps"}
        />
        <Box padding={"0 2em"}>
          <MapOne />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default GoogleMaps;
