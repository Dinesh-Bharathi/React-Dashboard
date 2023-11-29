import React from "react";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import BarChart from "../components/BarChart";
import TeamMembers from "../components/TeamMembers";
import TodoList from "../components/TodoList";
import TrackProgress from "../components/TrackProgress";

function Dashboard() {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgb(17, 205, 239) 50vh, #f6f6f6 50vh)`,
        minHeight: "100vh", // Ensure the background covers the entire viewport height
      }}
    >
      <CssBaseline />
      <Header />
      <Grid container spacing={4} sx={{ padding: "0 2em", mt: 2 }}>
        <Grid item xs={12} md={8}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: "100%" }}>
          <BarChart />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: "0 2em", mt: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <TeamMembers />
        </Grid>
        <Grid xs={12} item sm={12} md={4}>
          <TodoList />
        </Grid>
        <Grid xs={12} item sm={12} md={4}>
          <TrackProgress />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
