import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const chartOptions = {
    chart: {
      background: {
        // Use linear gradient for the background color
        colors: ["#172B4D", "#1A1751"],
        type: "linear",
        stops: [0, 100],
      },
      foreColor: "#fff", // Text color
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff", // Y-axis label color
        },
      },
    },
    tooltip: {
      theme: "dark", // Tooltip theme
    },
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: [30, 40, 25, 50, 49, 21],
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="line"
      height={350}
    />
  );
};

export default LineChart;
