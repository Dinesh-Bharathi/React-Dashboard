import React from "react";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import BarChart from "../components/BarChart";
import TeamMembers from "../components/TeamMembers";
import TodoList from "../components/TodoList";
import TrackProgress from "../components/TrackProgress";
import ActivityFeed from "../components/ActivityFeed";
import LightTable from "../components/LightTable";
import CreditCard from "../components/CreditCard";
import BitCoinCard from "../components/BitCoinCard";
import PageVisits from "../components/PageVisits";
import SocialTraffic from "../components/SocialTraffic";

function Dashboard() {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgb(17, 205, 239) 50vh, rgb(245, 245, 255) 50vh)`,
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
      <Grid container spacing={4} sx={{ padding: "0 2em", mt: 2 }}>
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
      <Grid container spacing={4} sx={{ padding: "0 2em", mt: 2 }}>
        <Grid item xs={12} md={5}>
          <ActivityFeed />
        </Grid>
        <Grid item xs={12} md={7}>
          <LightTable />
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item md={6} sm={6} xs={12}>
              <CreditCard />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <BitCoinCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ padding: "0 2em", mt: 2 }}>
        <Grid item md={8} xs={12}>
          <PageVisits />
        </Grid>
        <Grid item md={4} xs={12}>
          <SocialTraffic />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
