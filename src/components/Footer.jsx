import { useTheme } from "@emotion/react";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: "rgb(245, 245, 255)", paddingTop: "1em" }}>
      <Grid container p={3}>
        <Grid item sm={6} xs={12}>
          <Box>
            <span style={{ marginRight: "0.5em", color: "#8898AA" }}>
              &#169; 2023
            </span>
            <Link to="#" style={{ color: theme.palette.primary.main }}>
              Creative Tim
            </Link>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} display={"flex"} justifyContent={"end"}>
          <Stack direction={"row"} spacing={2}>
            <Link to="#" style={{ color: "#8898AA" }}>
              Creative Tim
            </Link>
            <Link to="#" style={{ color: "#8898AA" }}>
              About Us
            </Link>
            <Link to="#" style={{ color: "#8898AA" }}>
              Blog
            </Link>
            <Link to="#" style={{ color: "#8898AA" }}>
              MIT Licence
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
