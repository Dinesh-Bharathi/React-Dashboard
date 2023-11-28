import React from "react";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import { Box, CssBaseline, Grid } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ background: "rgb(17, 205, 239)", minHeight: "45vh" }}>
      <CssBaseline />
      <Header />
      <Grid container spacing={2}>
        <Grid item md={8}>
          <LineChart />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
