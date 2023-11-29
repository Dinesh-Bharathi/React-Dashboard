import React from "react";
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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PieChartIcon from "@mui/icons-material/PieChart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link as RouterLink } from "react-router-dom";

// Customize the theme to set textDecoration none for all Link components
const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          //   background: "rgb(17, 205, 239)",
          padding: "0.8em 2em",
          //   minHeight: "45vh",
        }}
      >
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
          >
            <Typography
              variant="h6"
              color="white"
              style={{ marginRight: "1.5em" }}
            >
              Default
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
                Dashboard
              </RouterLink>
              <RouterLink
                underline="hover"
                color="text.primary"
                to="/material-ui/react-breadcrumbs/"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Default
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
    </ThemeProvider>
  );
}

export default Header;
