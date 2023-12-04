import { useTheme } from "@emotion/react";
import { Box, Grid, Stack, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isXs = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ paddingTop: "1em" }}>
      <ThemeProvider theme={theme}>
        <Grid container p={3}>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "left" },
            }}
          >
            <Box sx={{ mb: { xs: "1em", sm: "0px" } }}>
              <span style={{ marginRight: "0.5em", color: "#8898AA" }}>
                &#169; 2023
              </span>
              <Link
                to="#"
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                Creative Tim
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            display={"flex"}
            sx={{ justifyContent: { xs: "center", sm: "end" } }}
          >
            <Stack direction={isXs ? "column" : "row"} spacing={2}>
              <Link
                to="#"
                style={{
                  color: "#8898AA",
                  textAlign: "center",
                }}
              >
                CreativeTim
              </Link>
              <Link to="#" style={{ color: "#8898AA", textAlign: "center" }}>
                About Us
              </Link>
              <Link to="#" style={{ color: "#8898AA", textAlign: "center" }}>
                Blog
              </Link>
              <Link to="#" style={{ color: "#8898AA", textAlign: "center" }}>
                MIT Licence
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
