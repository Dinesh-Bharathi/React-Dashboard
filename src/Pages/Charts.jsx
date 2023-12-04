import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  IconButton,
  createTheme,
  ThemeProvider,
  Button,
  Card,
  CardContent,
  CssBaseline,
  CardHeader,
  Avatar,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PieChartIcon from "@mui/icons-material/PieChart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link as RouterLink } from "react-router-dom";
import theme from "../assets/styles/theme";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

function CardComponent({
  title,
  value,
  color,
  icon,
  percentage,
  percentageColor,
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardContent
          sx={{
            padding: "16px !important",
            paddingBottom: "16px !important", // Adjusted padding bottom
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1em",
            }}
          >
            <div style={{ padding: "0 8px" }}>
              <Typography
                variant="h5"
                display="flex"
                alignItems="center"
                fontSize="13px"
                sx={{
                  color: "#8898AA",
                  fontWeight: "500",
                  lineHeight: "22px",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "20px",
                  color: "#32325D",
                  fontWeight: "500",
                }}
              >
                {value}
              </Typography>
            </div>
            <div style={{ padding: "0 8px" }}>
              <IconButton
                sx={{
                  background: color,
                  color: "#fff",
                  width: "3rem",
                  height: "3rem",
                  padding: "8px",
                }}
              >
                {icon}
              </IconButton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.8em",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: "300",
                marginRight: "0.5rem",
                display: "flex",
                alignItems: "center",
                color: percentageColor,
              }}
            >
              {percentage}
            </Typography>
            <Typography
              fontWeight={300}
              style={{ fontSize: "14px", color: "#525F7F" }}
            >
              Since last month
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Header() {
  return (
    <Box>
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
          flexWrap={"wrap"}
        >
          <Typography
            variant="h6"
            color="white"
            style={{ marginRight: "1.5em" }}
          >
            Charts
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
              to="/material-ui/getting-started/installation/"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Charts
            </RouterLink>
            <RouterLink
              underline="hover"
              color="text.primary"
              to="/material-ui/react-breadcrumbs/"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Charts
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
      {/* *********************************************** */}
      <Grid container spacing={4}>
        {/* <Card>
              <CardContent  
                sx={{
                  padding: "16px !important",
                  paddingBottom: "16px !important", // Adjusted padding bottom
                }}
              >
                <Grid display={"flex"} justifyContent={"space-between"}>
                  <div style={{ padding: "0 12px" }}>
                    <Typography
                      variant="h5"
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={"13px"}
                      sx={{
                        color: "#8898AA",
                        fontWeight: "500",
                      }}
                    >
                      TRAFFIC
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "20px",
                        color: "#32325D",
                        fontWeight: "500",
                      }}
                    >
                      350,897
                    </Typography>
                  </div>
                  <div style={{ padding: "0 15px" }}>
                    <IconButton
                      sx={{
                        background:
                          "linear-gradient(87deg, rgb(245, 54, 92), rgb(245, 96, 54)) !important",
                        color: "#fff",
                        width: "3rem",
                        height: "3rem",
                        padding: "12px",
                      }}
                    >
                      <InsertChartOutlinedIcon />
                    </IconButton>
                  </div>
                </Grid>
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  style={{ marginTop: "0.8em" }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: "300",
                      marginRight: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#2DCE89",
                    }}
                  >
                    <ArrowUpwardOutlinedIcon sx={{ fontSize: "14px" }} />
                    3.48%{" "}
                  </Typography>
                  <Typography>Since last month</Typography>
                </Grid>
              </CardContent>
            </Card> */}
        <CardComponent
          title="TRAFFIC"
          value="350,897"
          color="linear-gradient(87deg, rgb(245, 54, 92), rgb(245, 96, 54)) !important"
          icon={<InsertChartOutlinedIcon />}
          percentage={
            <>
              <ArrowUpwardOutlinedIcon
                sx={{ fontSize: "16px", margin: "0 0 0 -4px" }}
              />
              3.48%
            </>
          }
          percentageColor="#2DCE89"
        />
        <CardComponent
          title="NEW USERS"
          value="2,356"
          color="linear-gradient(87deg, rgb(251, 99, 64), rgb(251, 177, 64)) !important"
          iconColor="#fff"
          icon={<PieChartIcon />}
          percentage={
            <>
              <ArrowDownwardIcon
                sx={{ fontSize: "16px", margin: "0 0 0 -4px" }}
              />{" "}
              3.48%
            </>
          }
          percentageColor="#F5365C"
        />
        <CardComponent
          title="SALES"
          value="924"
          color="linear-gradient(87deg, rgb(45, 206, 137), rgb(45, 206, 204)) !important"
          iconColor="#fff"
          icon={<GroupAddIcon />}
          percentage={
            <>
              <ArrowDownwardIcon
                sx={{ fontSize: "16px", margin: "0 0 0 -4px" }}
              />
              1.10%
            </>
          }
          percentageColor="#FB6340"
        />
        <CardComponent
          title="PERFORMANCE"
          value="49.65%"
          color="linear-gradient(87deg, rgb(94, 114, 228), rgb(130, 94, 228)) !important"
          iconColor="#fff"
          icon={<EmojiEventsIcon />}
          percentage={
            <>
              <ArrowUpwardOutlinedIcon
                sx={{ fontSize: "16px", margin: "0 0 0 -4px" }}
              />
              10%
            </>
          }
          percentageColor="#2DCE89"
        />
      </Grid>
    </Box>
  );
}

const LineChart = () => {
  const [chartData, setChartData] = useState({
    categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      {
        name: "Series 1",
        data: [0, 20, 10, 30, 15, 40, 20, 60],
      },
    ],
  });

  const options = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: chartData.categories,
    },
    stroke: {
      curve: "smooth", // Add this line to make the chart curved
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <Card>
      <CardHeader
        subheader={
          <Typography
            variant="h5"
            sx={{
              fontSize: "17px !important",
              color: "#172B4D",
              fontWeight: "500",
            }}
          >
            Sales Value
          </Typography>
        }
        title={
          <Typography
            variant="span"
            sx={{
              fontSize: "0.625rem",
              color: "#CED4DA",
              fontWeight: "600",
              lineHeight: "1.5",
              letterSpacing: "0.0675rem",
            }}
          >
            OVERVIEW
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </CardContent>
    </Card>
  );
};

const Barchart = () => {
  const chartData = {
    options: {
      chart: {
        background: "",
        foreColor: "#bbb",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisBorder: {
          show: false, // Hide the main x-axis line
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        tickAmount: 3, // Increase the number of y-axis ticks
        min: 0, // Set the minimum y-axis value to 0
        max: 30, // Set the maximum y-axis value to 30
        labels: {
          formatter: function (value) {
            return value.toFixed(0); // Display y-axis values without decimals
          },
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top",
          },
          borderRadius: 4, // Set border radius to 15px
          columnWidth: 10, // Set bar width to 10px
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#ff541b"],
      animations: {
        enabled: true, // Enable animations
        easing: "easeinout", // Easing function for animations
        speed: 800, // Animation speed in milliseconds
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    series: [
      {
        name: "Monthly Revenue",
        data: [25, 20, 30, 22, 17, 29],
      },
    ],
  };

  return (
    <Card>
      <CardHeader
        subheader={
          <Typography
            variant="h5"
            sx={{
              fontSize: "17px !important",
              color: "#172B4D",
              fontWeight: "500",
            }}
          >
            Total orders
          </Typography>
        }
        title={
          <Typography
            variant="span"
            sx={{
              fontSize: "0.625rem",
              color: "#CED4DA",
              fontWeight: "600",
              lineHeight: "1.5",
              letterSpacing: "0.0675rem",
            }}
          >
            PERFORMANCE
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={"350"}
        />
      </CardContent>
    </Card>
  );
};

const DotChart = () => {
  const [chartData, setChartData] = useState({
    categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      {
        name: "Series 1",
        data: [0, 20, 10, 30, 15, 40, 20, 60],
      },
    ],
  });

  const options = {
    chart: {
      id: "basic-scatter",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: chartData.categories,
    },
    markers: {
      size: 10, // Set the size of the dots
      strokeWidth: 2, // Set the border width of the dots
    },
    tooltip: {
      enabled: false, // Disable tooltip for dots
    },
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader
        subheader={
          <Typography
            variant="h5"
            sx={{
              fontSize: "17px !important",
              color: "#172B4D",
              fontWeight: "500",
            }}
          >
            Sales Value
          </Typography>
        }
        title={
          <Typography
            variant="span"
            sx={{
              fontSize: "0.625rem",
              color: "#CED4DA",
              fontWeight: "600",
              lineHeight: "1.5",
              letterSpacing: "0.0675rem",
            }}
          >
            GROWTH
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="scatter" // Set type to "scatter" for dot chart
          height={350}
        />
      </CardContent>
    </Card>
  );
};

const PieChart = () => {
  const [chartData, setChartData] = useState({
    categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [20, 30, 15, 35, 10, 40, 25, 45], // Data for the Pie Chart
  });

  const options = {
    chart: {
      id: "basic-pie",
    },
    labels: chartData.categories, // Labels for each segment of the pie chart
    dataLabels: {
      enabled: false, // Set this to false to remove values inside the Pie Chart
    },
    legend: {
      show: false, // Set this to false to remove the legends
    },
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader
        subheader={
          <Typography
            variant="h5"
            sx={{
              fontSize: "17px !important",
              color: "#172B4D",
              fontWeight: "500",
            }}
          >
            Affiliate traffic
          </Typography>
        }
        title={
          <Typography
            variant="span"
            sx={{
              fontSize: "0.625rem",
              color: "#CED4DA",
              fontWeight: "600",
              lineHeight: "1.5",
              letterSpacing: "0.0675rem",
            }}
          >
            PARTNERS
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="pie" // Set type to "pie" for Pie Chart
          height={350}
        />
      </CardContent>
    </Card>
  );
};

const DonutChart = () => {
  const [chartData, setChartData] = useState({
    categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [20, 30, 15, 35, 10, 40, 25, 45], // Data for the Donut Chart
  });

  const options = {
    chart: {
      id: "basic-donut",
    },
    labels: chartData.categories, // Labels for each segment of the donut chart
    dataLabels: {
      enabled: false, // Set this to false to remove values inside the Donut Chart
    },
    legend: {
      show: false, // Set this to false to remove the legends
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%", // Set the size of the donut hole
        },
      },
    },
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader
        subheader={
          <Typography
            variant="h5"
            sx={{
              fontSize: "17px !important",
              color: "#172B4D",
              fontWeight: "500",
            }}
          >
            Sales Value
          </Typography>
        }
        title={
          <Typography
            variant="span"
            sx={{
              fontSize: "0.625rem",
              color: "#CED4DA",
              fontWeight: "600",
              lineHeight: "1.5",
              letterSpacing: "0.0675rem",
            }}
          >
            GROWTH
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="donut"
          height={386}
        />
      </CardContent>
    </Card>
  );
};

const StackedBarChart = () => {
  const [chartData, setChartData] = useState({
    categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      {
        name: "Series 1",
        data: [20, 30, 15, 35, 10, 40, 25, 45],
      },
      {
        name: "Series 2",
        data: [10, 25, 30, 15, 20, 35, 15, 30],
      },
      {
        name: "Series 3",
        data: [25, 30, 15, 20, 35, 15, 30, 10],
      },
      // Add more series as needed
    ],
  });

  const options = {
    chart: {
      id: "basic-stacked-bar",
      stacked: true,
      toolbar: {
        show: false, // Set to false to hide the top toolbar
      },
      dataLabels: {
        enabled: false,
      },
    },
    xaxis: {
      categories: chartData.categories,
    },
    plotOptions: {
      bar: {
        horizontal: false, // Set to true for horizontal bars
        stacked: true,
        dataLabels: {
          enabled: false,
        },
        columnWidth: 16, // Adjust the width of the bars
        borderRadius: 4, // Adjust the border radius of the bars
      },
    },
    legend: {
      show: false, // Set to false to hide the bottom legends
    },
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader
        subheader={
          <Typography
            variant="h5"
            sx={{
              fontSize: "17px !important",
              color: "#172B4D",
              fontWeight: "500",
            }}
          >
            Product comparison
          </Typography>
        }
        title={
          <Typography
            variant="span"
            sx={{
              fontSize: "0.625rem",
              color: "#CED4DA",
              fontWeight: "600",
              lineHeight: "1.5",
              letterSpacing: "0.0675rem",
            }}
          >
            OVERVIEW
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="bar" // Set type to "bar" for Stacked Bar Chart
          height={315}
        />
      </CardContent>
    </Card>
  );
};

const Charts = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgb(17, 205, 239) 40vh, rgb(245, 245, 255) 40vh)`,
        minHeight: "100vh",
        padding: "0.5em 2em",
        overflowX: "auto",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
      <Box mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <LineChart />
            <DotChart />
            <PieChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Barchart />
            <DonutChart />
            <StackedBarChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Charts;
