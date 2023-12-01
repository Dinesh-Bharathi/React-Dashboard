import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function BreadCrumbs(props) {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgb(17, 205, 239) 50vh, rgb(245, 245, 255) 50vh)`,
        padding: "1em 2em",
      }}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 2 }}
      >
        <Grid
          item
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h6"
            color="white"
            style={{ marginRight: { xs: "0.5em", sm: "1.5em" } }}
          >
            {props.title}
          </Typography>
          <Breadcrumbs
            separator={<span style={{ color: "#ffffff" }}>-</span>}
            aria-label="breadcrumb"
          >
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <IconButton sx={{ padding: 1 }}>
                <HomeIcon sx={{ color: "#fff", fontSize: "1.25rem" }} />
              </IconButton>
            </RouterLink>
            <RouterLink
              to="/*"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              {props.firstLink}
            </RouterLink>
            <RouterLink
              underline="hover"
              color="text.primary"
              to="#"
              style={{
                textDecoration: "none",
                color: "#DEE2E6",
              }}
            >
              {props.secondLink}
            </RouterLink>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button
            size="small"
            sx={{
              background: "#fff",
              color: "#5E72E4",
              fontSize: "12px",
              padding: "4px", // Adjusted padding for better appearance
              marginRight: "0.75rem",
              borderRadius: "6px",
              "&:hover": {
                background: "#fff",
                boxShadow: "2px 1px 6px 1px #aaa",
              },
            }}
          >
            New
          </Button>
          <Button
            size="small"
            sx={{
              background: "#fff",
              color: "#5E72E4",
              fontSize: "12px",
              padding: "4px", // Adjusted padding for better appearance
              marginRight: "0.75rem",
              borderRadius: "6px",
              "&:hover": {
                background: "#fff",
                boxShadow: "2px 1px 6px 1px #aaa",
              },
            }}
          >
            Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BreadCrumbs;
