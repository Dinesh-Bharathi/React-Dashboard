import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
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
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Image1 from "../assets/images/Team-member-1.jpg";
import Image2 from "../assets/images/Team-member-2.jpg";
import Image3 from "../assets/images/Team-member-3.jpg";
import Image4 from "../assets/images/Team-member-4.jpg";

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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "#FB6340";
      case "completed":
        return "#2DCE89";
      case "delayed":
        return "#F5365C";
      case "on schedule":
        return "#11CDEF";
      default:
        return "#ccc"; // Default color if the status doesn't match any case
    }
  };

  const data = [
    {
      id: 1,
      projectName: "Facebook",
      budget: "1,480",
      status: "pending",
      completion: 60,
    },
    {
      id: "2",
      projectName: "Facebook",
      budget: "5,480",
      status: "completed",
      completion: 100,
    },
    {
      id: "3",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/sketch.a6af780a.jpg",
      projectName: "Google",
      budget: "4,807",
      status: "delayed",
      completion: 72,
    },
    {
      id: "4",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/react.0e8c9066.jpg",
      projectName: "Instagram",
      budget: "3,678",
      status: "on schedule",
      completion: 90,
    },
    {
      id: "5",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/vue.43bd93a8.jpg",
      projectName: "twitter",
      budget: "2,645",
      status: "completed",
      completion: 90,
    },

    // Add more data entries as needed
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box position={"relative"}>
        <Card>
          <CardHeader
            title="Social Traffic"
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
                    <TableCell sx={{ minWidth: "130px" }}>REFFERAL</TableCell>
                    <TableCell sx={{ minWidth: "110px" }}>VISITORS</TableCell>
                    <TableCell sx={{ minWidth: "180px" }}></TableCell>
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
                        <Box display="flex" alignItems="center">
                          <Typography
                            variant="body2"
                            fontWeight={200}
                            sx={{
                              paddingRight: 1,
                              color: "GrayText",
                              fontSize: "0.8rem",
                            }}
                          >
                            {row.completion}%
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={row.completion}
                            sx={{
                              borderRadius: "10px",
                              height: "4px",
                              backgroundColor: "#eee",
                              flexGrow: 1,
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: getStatusColor(row.status),
                              },
                            }}
                          />
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
