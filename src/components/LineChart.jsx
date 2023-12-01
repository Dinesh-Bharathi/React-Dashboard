import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

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
  const [activeButton, setActiveButton] = useState("monthly");

  const chartOptions = {
    chart: {
      background: "#232D3F",
      foreColor: "#fff",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeOutQuart",
        speed: 1000,
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
    xaxis: {
      categories: chartData.categories,
      labels: {
        style: {
          colors: "#525F7F",
        },
      },
      axisBorder: {
        show: false,
        color: "#435585",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#525F7F",
        },
        formatter: function (value) {
          return "$" + value + "k";
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      borderColor: "#435585",
      strokeDashArray: 3,
    },
    tooltip: {
      theme: "dark",
    },
    stroke: {
      curve: "smooth",
      lineCap: "round",
      width: 4,
      strokeWidth: 2,
      animate: {
        enabled: true,
        easing: "easeOutQuart", // Use easeOutQuart easing function for a smooth animation
        speed: 2000,
        delay: 200, // Introduce a delay before the animation starts
      },
    },
    markers: {
      size: 0,
      colors: ["transparent"],
      strokeColors: "#fff",
      strokeWidth: 0,
    },
  };

  const handleButtonClick = (type) => {
    const newData =
      type === "monthly"
        ? {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
            ],
            series: [
              {
                name: "Series 1",
                data: [10, 25, 15, 35, 20, 45, 25, 70],
              },
            ],
          }
        : {
            categories: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
            series: [
              {
                name: "Series 1",
                data: [5, 15, 10, 20, 12, 30, 18, 40],
              },
            ],
          };

    setChartData(newData);
    setActiveButton(type);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#232D3F",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "4px 6px 8px #aaa",
      }}
    >
      {/* <CssBaseline /> */}
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Grid item xs={6}>
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
          <Typography variant="h5" color="white">
            Sales Value
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            onClick={() => handleButtonClick("monthly")}
            sx={{
              marginRight: "10px",
              backgroundColor: "#fff",
              color: "#5E72E4",
              ...(activeButton === "monthly" && {
                backgroundColor: "#5E72E4",
                color: "#fff",
              }),
            }}
          >
            Month
          </Button>
          <Button
            variant="contained"
            onClick={() => handleButtonClick("weekly")}
            sx={{
              backgroundColor: "#fff",
              color: "#5E72E4",
              ...(activeButton === "weekly" && {
                backgroundColor: "#5E72E4",
                color: "#fff",
              }),
            }}
          >
            Week
          </Button>
        </Grid>
      </Grid>
      <ReactApexChart
        options={chartOptions}
        series={chartData.series}
        type="line"
        height={350}
        width="100%"
      />
    </Box>
  );
};

export default LineChart;
