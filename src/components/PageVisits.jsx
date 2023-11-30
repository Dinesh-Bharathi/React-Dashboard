import { ArrowDownward, ArrowUpward, MoreVert } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Button,
} from "@mui/material";
import React, { useState } from "react";

const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F6F9FC",
          color: "rgb(136, 152, 170)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "0.65rem",
          letterSpacing: "1px",
          color: "rgb(136, 152, 170)",
          padding: "12px 24px",
          textAlign: "left",
        },
      },
    },
  },
});

function LightTable() {
  const data = [
    {
      id: 1,
      projectName: "/argon/",
      budget: "4,569",
      status: "340",
      arrowIcon: <ArrowUpward sx={{ fontSize: "1rem", color: "#2DCE89" }} />,
      bounceRate: "46,53%",
    },
    {
      id: "2",
      projectName: "/argon/index.html",
      budget: "3,985",
      status: "319",
      arrowIcon: <ArrowDownward sx={{ fontSize: "1rem", color: "#F5365C" }} />,
      bounceRate: "46,53%",
    },
    {
      id: "3",
      projectName: "/argon/charts.html",
      budget: "3,513",
      status: "294",
      arrowIcon: <ArrowDownward sx={{ fontSize: "1rem", color: "#F5365C" }} />,
      bounceRate: "46,53%",
    },
    {
      id: "4",
      projectName: "/argon/tables.html",
      budget: "2,050",
      status: "147",
      arrowIcon: <ArrowUpward sx={{ fontSize: "1rem", color: "#2DCE89" }} />,
      bounceRate: "46,53%",
    },
    {
      id: "5",
      projectName: "/argon/profile.html",
      budget: "1,795",
      status: "190",
      arrowIcon: <ArrowDownward sx={{ fontSize: "1rem", color: "#F5365C" }} />,
      bounceRate: "46,53%",
    },

    // Add more data entries as needed
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box position={"relative"}>
        <Card>
          <CardHeader
            title="Page visits"
            action={
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "#5E72E4",
                  fontWeight: 600, // Adjust the font weight
                  padding: "4px !important", // Override the padding
                }}
              >
                See all
              </Button>
            }
            sx={{
              "& .MuiTypography-root": {
                fontSize: "17px !important",
                color: "#172B4D",
                fontWeight: "600",
              },
              padding: "20px 24px",
            }}
          />
          <Divider />
          <CardContent sx={{ padding: "0 !important" }}>
            <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>PAGE NAME</TableCell>
                    <TableCell>VISITORS</TableCell>
                    <TableCell>UNIQUE USERS</TableCell>
                    <TableCell>BOUNCE RATE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "GrayText", letterSpacing: "1.5px" }}
                        >
                          {row.projectName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "InactiveCaptionText",
                            fontWeight: 200,
                          }}
                        >
                          {row.budget}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "InactiveCaptionText",
                            fontWeight: 200,
                          }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Typography
                            variant="body2"
                            fontWeight={200}
                            sx={{
                              paddingRight: 1,
                              color: "GrayText",
                              fontSize: "0.8rem",

                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {row.arrowIcon}
                            <span style={{ marginLeft: "0.5em" }}>
                              {row.bounceRate}
                            </span>
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default LightTable;
