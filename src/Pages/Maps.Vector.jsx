import {
  Box,
  CardContent,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import theme from "../assets/styles/theme";
import { VectorMap } from "react-jvectormap";
import "jvectormap-next/jquery-jvectormap.css";

const MapOne = () => {
  // Define map options
  const mapOptions = {
    map: "world_mill", // You can choose other maps as well
    backgroundColor: "transparent",
    regionsSelectable: true,
    regionStyle: {
      initial: {
        fill: "#8a8a8a", // default color for countries
      },
      selected: {
        fill: "#2938bc", // color for selected countries
      },
    },
  };

  // Define map data (you can customize it based on your requirements)
  const mapData = {
    // Example data: color some countries
    US: "#ff0000", // United States in red
    CA: "#00ff00", // Canada in green
    // Add more countries as needed
  };

  // Create the series array
  const series = [
    {
      attribute: "fill",
      scale: ["#8a8a8a", "#2938bc"], // Color scale
      values: mapData,
    },
  ];

  return (
    <CardContent sx={{ background: "#fff", borderRadius: "6px" }}>
      <VectorMap
        map={mapOptions.map}
        backgroundColor={mapOptions.backgroundColor}
        containerStyle={{
          width: "100%",
          height: "500px", // Adjust the height as needed
        }}
        containerClassName="map"
        series={series}
        regionStyle={mapOptions.regionStyle}
      />
    </CardContent>
  );
};

const VectorMaps = () => {
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
              Vector maps
            </Typography>
          }
          firstLink={"Maps"}
          secondLink={"Vector maps"}
        />
        <Box padding={"0 2em"}>
          <MapOne />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default VectorMaps;
