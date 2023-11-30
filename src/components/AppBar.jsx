import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Divider, Grid, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Badge from "@mui/material/Badge";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EmailIcon from "@mui/icons-material/Email";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReportIcon from "@mui/icons-material/Report";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import ProfileImage from "../assets/images/profile.png";
import { Brightness4, Brightness7, MenuBook } from "@mui/icons-material";

export default function ButtonAppBar(props) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] =
    React.useState(null);
  const [appsAnchorEl, setAppsAnchorEl] = React.useState(null);

  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    props.change();
  };

  const dynamicTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const open = Boolean(anchorEl);
  const notificationsOpen = Boolean(notificationsAnchorEl);
  const appsOpen = Boolean(appsAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClick = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleAppsClick = (event) => {
    setAppsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  const handleAppsClose = () => {
    setAppsAnchorEl(null);
  };

  return (
    <ThemeProvider theme={dynamicTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: "rgb(17, 205, 239)",
            boxShadow: "none",
            p: "0.5em",
          }}
        >
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid
              item
              md={4}
              sm={5}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Toolbar>
                <Paper
                  component="form"
                  sx={{
                    p: "4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%", // Adjusted width for responsiveness
                    borderRadius: "50px",
                    boxShadow: "none",
                    color: { theme },
                  }}
                >
                  <IconButton
                    sx={{ p: "12px", color: darkMode ? "#fff" : "#212121" }}
                    aria-label="menu"
                  >
                    <SearchIcon fontSize="small" sx={{ fontSize: "14px" }} />
                  </IconButton>
                  <InputBase
                    id="navsearch"
                    sx={{
                      flex: 1,
                      // color: "rgb(33, 37, 41) !important;",
                      "&::placeholder": { color: theme.palette.primary },
                    }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Paper>
              </Toolbar>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                mr: "1em",
              }}
            >
              <IconButton
                sx={{
                  color: "#fff",
                  mt: 0.5,
                  display: { sm: "block", md: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                sx={{ ml: 1 }}
                onClick={toggleDarkMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness4 sx={{ color: theme.palette.common.black }} />
                ) : (
                  <Brightness7 />
                )}
              </IconButton>
              {/* Notification tab */}
              <IconButton
                sx={{ color: "#fff", p: "0.5em" }}
                onClick={handleNotificationsClick}
              >
                <Badge variant="dot" color="secondary">
                  <NotificationsIcon sx={{ fontSize: "16px" }} />
                </Badge>
              </IconButton>
              <Menu
                id="notifications-menu"
                anchorEl={notificationsAnchorEl}
                open={notificationsOpen}
                onClose={handleNotificationsClose}
                MenuListProps={{
                  "aria-labelledby": "notifications-icon",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PaperProps={{
                  style: {
                    padding: "0.6em",
                    minWidth: { xs: "100%", sm: "320px" }, // Adjusted width for responsiveness
                  },
                }}
              >
                {/* Notifications content remains unchanged */}

                <ul>
                  <li style={{ padding: "0.5em 0.5em" }}>
                    <Typography variant="body1" sx={{ color: "#8898AA" }}>
                      You have{" "}
                      <Typography
                        fontWeight={600}
                        variant="span"
                        sx={{ color: "#11cdef" }}
                      >
                        13
                      </Typography>{" "}
                      notifications.
                    </Typography>
                  </li>
                  <li style={{ padding: "0.5em 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 0.5em",
                      }}
                    >
                      <Avatar
                        src={ProfileImage}
                        sx={{ height: "50px", width: "50px" }}
                      />
                      <div style={{ width: "100%", padding: "0 1em 0 1.5em" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "1.5",
                              color: "rgb(50, 50, 93)",
                            }}
                          >
                            John Snow
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "right",
                              color: "rgb(136, 152, 170)",
                              fontSize: "80%",
                            }}
                          >
                            2 hrs ago
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              fontWeight: "300",
                              lineHeight: "1.7",
                              margin: "0px",
                              color: "#525F7F",
                            }}
                          >
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <Divider sx={{ mt: 2 }} />
                  </li>
                  <li style={{ padding: "0.5em 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 0.5em",
                      }}
                    >
                      <Avatar
                        src={ProfileImage}
                        sx={{ height: "50px", width: "50px" }}
                      />
                      <div style={{ width: "100%", padding: "0 1em 0 1.5em" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "1.5",
                              color: "rgb(50, 50, 93)",
                            }}
                          >
                            John Snow
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "right",
                              color: "rgb(136, 152, 170)",
                              fontSize: "80%",
                            }}
                          >
                            2 hrs ago
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              fontWeight: "300",
                              lineHeight: "1.7",
                              margin: "0px",
                              color: "#525F7F",
                            }}
                          >
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <Divider sx={{ mt: 2 }} />
                  </li>
                  <li style={{ padding: "0.5em 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 0.5em",
                      }}
                    >
                      <Avatar
                        src={ProfileImage}
                        sx={{ height: "50px", width: "50px" }}
                      />
                      <div style={{ width: "100%", padding: "0 1em 0 1.5em" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "1.5",
                              color: "rgb(50, 50, 93)",
                            }}
                          >
                            John Snow
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "right",
                              color: "rgb(136, 152, 170)",
                              fontSize: "80%",
                            }}
                          >
                            2 hrs ago
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              fontWeight: "300",
                              lineHeight: "1.7",
                              margin: "0px",
                              color: "#525F7F",
                            }}
                          >
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <Divider sx={{ mt: 2 }} />
                  </li>
                  <li style={{ padding: "0.5em 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 0.5em",
                      }}
                    >
                      <Avatar
                        src={ProfileImage}
                        sx={{ height: "50px", width: "50px" }}
                      />
                      <div style={{ width: "100%", padding: "0 1em 0 1.5em" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "1.5",
                              color: "rgb(50, 50, 93)",
                            }}
                          >
                            John Snow
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "right",
                              color: "rgb(136, 152, 170)",
                              fontSize: "80%",
                            }}
                          >
                            2 hrs ago
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              fontWeight: "300",
                              lineHeight: "1.7",
                              margin: "0px",
                              color: "#525F7F",
                            }}
                          >
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <Divider sx={{ mt: 2 }} />
                  </li>
                  <li style={{ padding: "0.5em 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0 0.5em",
                      }}
                    >
                      <Avatar
                        src={ProfileImage}
                        sx={{ height: "50px", width: "50px" }}
                      />
                      <div style={{ width: "100%", padding: "0 1em 0 1.5em" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "500",
                              lineHeight: "1.5",
                              color: "rgb(50, 50, 93)",
                            }}
                          >
                            John Snow
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "right",
                              color: "rgb(136, 152, 170)",
                              fontSize: "80%",
                            }}
                          >
                            2 hrs ago
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              fontWeight: "300",
                              lineHeight: "1.7",
                              margin: "0px",
                              color: "#525F7F",
                            }}
                          >
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <Divider sx={{ mt: 2 }} />
                  </li>
                  <li style={{ textAlign: "center" }}>
                    <Button sx={{ width: "100%", color: "rgb(17, 205, 239)" }}>
                      View All
                    </Button>
                  </li>
                </ul>
              </Menu>

              {/* Apps tab */}
              <IconButton
                sx={{ color: "#fff", p: "0.5em" }}
                onClick={handleAppsClick}
              >
                <FileCopyIcon sx={{ fontSize: "16px" }} />
              </IconButton>
              <Menu
                id="apps-menu"
                anchorEl={appsAnchorEl}
                open={appsOpen}
                onClose={handleAppsClose}
                MenuListProps={{
                  "aria-labelledby": "apps-icon",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center", // Centered horizontally
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center", // Centered horizontally
                }}
                PaperProps={{
                  style: {
                    padding: "1em 2em",
                    minWidth: { xs: "700px", sm: "auto" }, // Full width for xs (mobile), 320px for sm (other devices)
                    background: "#172B4D",
                    textAlign: "center", // Centered content
                  },
                }}
              >
                {/* Apps content remains unchanged */}
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={4}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ padding: { sm: "0 1em" } }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(87deg, rgb(245, 54, 92), rgb(245, 96, 54)) !important",
                        }}
                      >
                        <DateRangeIcon />
                      </Avatar>
                      <small style={{ color: "#525F7F", marginTop: "12px" }}>
                        Calender
                      </small>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ padding: { sm: "0 1em" } }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(87deg, rgb(251, 99, 64), rgb(251, 177, 64)) !important",
                        }}
                      >
                        <EmailIcon />
                      </Avatar>
                      <small style={{ color: "#525F7F", marginTop: "12px" }}>
                        Email
                      </small>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ padding: { sm: "0 1em" } }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(87deg, rgb(17, 205, 239), rgb(17, 113, 239)) !important",
                        }}
                      >
                        <CreditCardIcon />
                      </Avatar>
                      <small style={{ color: "#525F7F", marginTop: "12px" }}>
                        Cards
                      </small>
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={"1em"}>
                  <Grid
                    item
                    xs={4}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ padding: { sm: "0 1em" } }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(87deg, rgb(45, 206, 137), rgb(45, 206, 204)) !important",
                        }}
                      >
                        <ReportIcon />
                      </Avatar>
                      <small style={{ color: "#525F7F", marginTop: "12px" }}>
                        Reports
                      </small>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ padding: { sm: "0 1em" } }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(87deg, rgb(137, 101, 224), rgb(188, 101, 224)) !important",
                        }}
                      >
                        <LocationOnIcon />
                      </Avatar>
                      <small style={{ color: "#525F7F", marginTop: "12px" }}>
                        Maps
                      </small>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ padding: { sm: "0 1em" } }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        sx={{
                          background:
                            "linear-gradient(87deg, rgb(255, 214, 0), rgb(190, 255, 0)) !important",
                        }}
                      >
                        <ShoppingBasketIcon />
                      </Avatar>
                      <small style={{ color: "#525F7F", marginTop: "12px" }}>
                        Shop
                      </small>
                    </div>
                  </Grid>
                </Grid>
              </Menu>

              {/* User profile */}
              <Button
                color="primary"
                style={{
                  textTransform: "capitalize",
                  p: "0.5em",
                  ml: { xs: "0.5em", sm: "1em" }, // Adjusted margin for responsiveness
                }}
                startIcon={<Avatar src={ProfileImage} alt="Profile Image" />}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Typography
                  color="white"
                  variant="body1"
                  fontSize={"14px"}
                  fontWeight={500}
                >
                  John Snow
                </Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    padding: "0.6em 0.8em", // Increase padding as needed
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    width: "100%",
                    height: "100%",
                    padding: "0 0 0.5em 1em",
                  }}
                >
                  Welcome!
                </Typography>
                <MenuItem onClick={handleClose}>
                  <PersonIcon sx={{ marginRight: "16px" }} />
                  <Typography>My profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <SettingsIcon sx={{ marginRight: "16px" }} />
                  <Typography>Settings</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <PersonIcon sx={{ marginRight: "16px" }} />
                  <Typography>My profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <EventNoteIcon sx={{ marginRight: "16px" }} />
                  <Typography>Activity</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LiveHelpIcon sx={{ marginRight: "16px" }} />
                  <Typography>Support</Typography>
                </MenuItem>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose}>
                  <DirectionsRunIcon sx={{ marginRight: "16px" }} />
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
