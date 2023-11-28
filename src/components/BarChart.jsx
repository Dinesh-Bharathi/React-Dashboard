import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const LightBarChart = () => {
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
    <Box
      sx={{
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "1px 1px 8px #aaa",
      }}
    >
      <Grid sx={{ padding: "20px 24px" }}>
        <Typography
          variant="span"
          display={"block"}
          sx={{
            fontWeight: "600",
            fontSize: "0.625rem",
            lineHeight: "1.5",
            letterSpacing: "2px",
            color: "rgb(136, 152, 170)",
          }}
        >
          PERFORMANCE
        </Typography>
        <Typography
          variant="span"
          sx={{
            fontWeight: "600",
            fontSize: "1.0625rem",
            color: "#172B4D",
            lineHeight: "1.5",
          }}
        >
          Total orders
        </Typography>
      </Grid>
      <Divider />
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="380"
      />
    </Box>
  );
};

export default LightBarChart;
