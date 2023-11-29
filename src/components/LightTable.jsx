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
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/bootstrap.bd712487.jpg",
      projectName: "Argon Design System",
      budget: "$2,500 USD",
      status: "pending",
      users: [Image1, Image2, Image3, Image4],
      completion: 60,
    },
    {
      id: "2",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/angular.b5045666.jpg",
      projectName: "Angular Now UI Kit PRO",
      budget: "$1,800 USD",
      status: "completed",
      users: [Image2, Image3, Image4, Image1],
      completion: 100,
    },
    {
      id: "3",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/sketch.a6af780a.jpg",
      projectName: "Black Dashboard",
      budget: "$3,150 USD",
      status: "delayed",
      users: [Image3, Image4, Image1, Image2],
      completion: 72,
    },
    {
      id: "4",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/react.0e8c9066.jpg",
      projectName: "React Material Dashboard",
      budget: "$4,400 USD",
      status: "on schedule",
      users: [Image4, Image1, Image2, Image3],
      completion: 90,
    },
    {
      id: "5",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/vue.43bd93a8.jpg",
      projectName: "Vue Paper UI Kit PRO",
      budget: "$2,200 USD",
      status: "completed",
      users: [Image1, Image2, Image3, Image4],
      completion: 90,
    },
    {
      id: 6,
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/bootstrap.bd712487.jpg",
      projectName: "Argon Design System",
      budget: "$2,500 USD",
      status: "pending",
      users: [Image1, Image2, Image3, Image4],
      completion: 60,
    },
    {
      id: "7",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/angular.b5045666.jpg",
      projectName: "Angular Now UI Kit PRO",
      budget: "$1,800 USD",
      status: "completed",
      users: [Image2, Image3, Image4, Image1],
      completion: 100,
    },
    {
      id: "8",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/sketch.a6af780a.jpg",
      projectName: "Black Dashboard",
      budget: "$3,150 USD",
      status: "delayed",
      users: [Image3, Image4, Image1, Image2],
      completion: 72,
    },
    {
      id: "9",
      projectLogo:
        "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/react.0e8c9066.jpg",
      projectName: "React Material Dashboard",
      budget: "$4,400 USD",
      status: "on schedule",
      users: [Image4, Image1, Image2, Image3],
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
            title="Light Table"
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
                    <TableCell sx={{ minWidth: 300 }}>PROJECT</TableCell>
                    <TableCell sx={{ minWidth: 120 }}>BUDGET</TableCell>
                    <TableCell sx={{ minWidth: 150 }}>STATUS</TableCell>
                    <TableCell>USERS</TableCell>
                    <TableCell sx={{ minWidth: 180 }}>COMPLETION</TableCell>
                    <TableCell>ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          minWidth: 180,
                        }}
                      >
                        <Avatar
                          src={row.projectLogo}
                          alt={row.projectName}
                          sx={{ marginRight: 2 }}
                        />
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: getStatusColor(row.status),
                              marginLeft: "5px",
                              marginRight: "5px",
                              display: "inline-block",
                            }}
                          />
                          <small
                            style={{
                              fontSize: "12px",
                              fontWeight: 300,
                              color: "InactiveCaptionText",
                            }}
                          >
                            {row.status}
                          </small>
                        </div>
                      </TableCell>
                      <TableCell>
                        <AvatarGroup max={4}>
                          {row.users.map((user, idx) => (
                            <Avatar
                              key={idx}
                              src={user}
                              sx={{ height: "30px", width: "30px" }}
                            />
                          ))}
                        </AvatarGroup>
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

                      <TableCell>
                        <IconButton onClick={handleMenuClick}>
                          <MoreVert sx={{ color: "#aaa" }} />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleMenuClose}
                          onClick={handleMenuClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem>Edit</MenuItem>
                          <MenuItem>Delete</MenuItem>
                        </Menu>
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

// const data = [
//   {
//     id: 1,
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/bootstrap.bd712487.jpg",
//     projectName: "Argon Design System",
//     budget: "$2,500 USD",
//     status: "pending",
//     users: [Image1, Image2, Image3, Image4],
//     completion: 60,
//   },
//   {
//     id: "2",
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/angular.b5045666.jpg",
//     projectName: "Angular Now UI Kit PRO",
//     budget: "$1,800 USD",
//     status: "completed",
//     users: [Image2, Image3, Image4, Image1],
//     completion: 100,
//   },
//   {
//     id: "3",
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/sketch.a6af780a.jpg",
//     projectName: "Black Dashboard",
//     budget: "$3,150 USD",
//     status: "delayed",
//     users: [Image3, Image4, Image1, Image2],
//     completion: 72,
//   },
//   {
//     id: "4",
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/react.0e8c9066.jpg",
//     projectName: "React Material Dashboard",
//     budget: "$4,400 USD",
//     status: "on schedule",
//     users: [Image4, Image1, Image2, Image3],
//     completion: 90,
//   },
//   {
//     id: "5",
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/vue.43bd93a8.jpg",
//     projectName: "Vue Paper UI Kit PRO",
//     budget: "$2,200 USD",
//     status: "completed",
//     users: [Image1, Image2, Image3, Image4],
//     completion: 90,
//   },
//   {
//     id: 6,
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/bootstrap.bd712487.jpg",
//     projectName: "Argon Design System",
//     budget: "$2,500 USD",
//     status: "pending",
//     users: [Image1, Image2, Image3, Image4],
//     completion: 60,
//   },
//   {
//     id: "7",
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/angular.b5045666.jpg",
//     projectName: "Angular Now UI Kit PRO",
//     budget: "$1,800 USD",
//     status: "completed",
//     users: [Image2, Image3, Image4, Image1],
//     completion: 100,
//   },
//   {
//     id: "8",
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/sketch.a6af780a.jpg",
//     projectName: "Black Dashboard",
//     budget: "$3,150 USD",
//     status: "delayed",
//     users: [Image3, Image4, Image1, Image2],
//     completion: 72,
//   },
//   {
//     id: "9",
//     projectLogo:
//       "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/react.0e8c9066.jpg",
//     projectName: "React Material Dashboard",
//     budget: "$4,400 USD",
//     status: "on schedule",
//     users: [Image4, Image1, Image2, Image3],
//     completion: 90,
//   },

//   // Add more data entries as needed
// ];
