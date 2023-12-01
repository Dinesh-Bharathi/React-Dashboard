import * as React from "react";
import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HouseIcon from "@mui/icons-material/House";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import StorageIcon from "@mui/icons-material/Storage";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TocIcon from "@mui/icons-material/Toc";
import MapIcon from "@mui/icons-material/Map";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PieChartIcon from "@mui/icons-material/PieChart";
import EventIcon from "@mui/icons-material/Event";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Close } from "@mui/icons-material";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 50,
  }),
  overflowX: "hidden",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0px",
    transitions: "width 1s, opacity 1s",
    opacity: 0,
  },
  "&:hover::-webkit-scrollbar": {
    width: "8px",
    opacity: 0.5,
    transitions: "width 1s, opacity 1s",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#aaa",
    borderRadius: "8px",
  },
  "&:hover::-webkit-scrollbar-thumb": {
    width: "16px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    marginTop: "1.5em",
  },
  "&:hover::-webkit-scrollbar-track": {
    "&::-webkit-scrollbar-thumb": {
      width: "20px",
      transition: "width 1s",
    },
  },
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 50,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  "&::-webkit-scrollbar": {
    width: "0px",
    transitions: "width 1s, opacity 1s",
    opacity: 0,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  border: "none",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",
  overflowX: "hidden",
  overflowY: "hidden",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  "& .MuiDrawer-paper": {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...openedMixin(theme),
    border: "none",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Apply box shadow only when closed
  },
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      border: "none",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Apply box shadow when drawer is closed
    },
  }),
}));

export default function MiniDrawer(props) {
  const globalTheme = createTheme({});
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [hoverOpen, setHoverOpen] = React.useState(false);
  const [openDashboardSubMenu, setOpenDashboardSubMenu] = React.useState(false);
  const [openExamplesSubMenu, setOpenExamplesSubMenu] = React.useState(false);
  const [openComponentsSubMenu, SetopenComponentsSubMenu] =
    React.useState(false);
  const [openFormsSubMenu, setOpenFormsSubMenu] = React.useState(false);
  const [openTablesSubMenu, setopenTablesSubMenu] = React.useState(false);
  const [openMapsSubMenu, setopenMapsSubMenu] = React.useState(false);
  const isMd = useMediaQuery("(max-width:800px)");

  const handleDashboardSubMenuClick = () => {
    setOpenDashboardSubMenu(!openDashboardSubMenu);
    setOpenExamplesSubMenu(false);
    SetopenComponentsSubMenu(false);
    setOpenFormsSubMenu(false);
    setopenTablesSubMenu(false);
    setopenMapsSubMenu(false);
  };
  const handleExamplesSubMenuClick = () => {
    setOpenExamplesSubMenu(!openExamplesSubMenu);
    setOpenDashboardSubMenu(false);
    SetopenComponentsSubMenu(false);
    setOpenFormsSubMenu(false);
    setopenTablesSubMenu(false);
    setopenMapsSubMenu(false);
  };
  const handleComponentsSubMenuClick = () => {
    SetopenComponentsSubMenu(!openComponentsSubMenu);
    setOpenDashboardSubMenu(false);
    setOpenExamplesSubMenu(false);
    setOpenFormsSubMenu(false);
    setopenTablesSubMenu(false);
    setopenMapsSubMenu(false);
  };
  const handleFormsSubMenuClick = () => {
    setOpenFormsSubMenu(!openFormsSubMenu);
    setOpenDashboardSubMenu(false);
    setOpenExamplesSubMenu(false);
    SetopenComponentsSubMenu(false);
    setopenTablesSubMenu(false);
    setopenMapsSubMenu(false);
  };
  const handleTablesSubMenuClick = () => {
    setopenTablesSubMenu(!openTablesSubMenu);
    setOpenDashboardSubMenu(false);
    setOpenExamplesSubMenu(false);
    SetopenComponentsSubMenu(false);
    setOpenFormsSubMenu(false);
    setopenMapsSubMenu(false);
  };
  const handleMapsSubMenuClick = () => {
    setopenMapsSubMenu(!openMapsSubMenu);
    setOpenDashboardSubMenu(false);
    setOpenExamplesSubMenu(false);
    SetopenComponentsSubMenu(false);
    setOpenFormsSubMenu(false);
    setopenTablesSubMenu(false);
  };

  const handleDrawerOpen = () => {
    if (hoverOpen) {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    if (hoverOpen) {
      setOpen(false);
    }
  };

  const handleMenuClick = () => {
    if (!hoverOpen) {
      setHoverOpen(true);
      setOpen(false);
    }
    if (hoverOpen) {
      setHoverOpen(false);
    }
  };

  const handleDrawerMenu = () => {
    props.miniDrawer(!props.drawerState);
  };

  return (
    <Box
      sx={{
        display: props.display
          ? "block"
          : "none" || (props.windowWidth > 899 && "block"),
        zIndex: "5",
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          onMouseOver={handleDrawerOpen}
          onMouseOut={handleDrawerClose}
        >
          <DrawerHeader
            sx={{
              display: open && "flex",
              alignItems: "center",
              alignItems: "center",
              justifyContent: open && "space-between",
              padding: open ? "2em 1.1em 1.5em 1.4em" : "1.5em 8px",
            }}
          >
            <Link to="/">
              <img
                src="https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/argon-react.128d71d3.png"
                style={{
                  opacity: open ? 1 : 0,
                  width: "108.213px",
                  height: "31.988px",
                }}
              />
            </Link>
            {isMd ? (
              <IconButton onClick={handleDrawerMenu}>
                <Close />
              </IconButton>
            ) : (
              <IconButton onClick={handleMenuClick}>
                {hoverOpen ? <MenuOpenIcon /> : <MenuIcon />}{" "}
              </IconButton>
            )}
          </DrawerHeader>
          <List>
            <ListItem
              key="Dashboard"
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "#fff !important",
                },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  border: "none",
                }}
                onClick={handleDashboardSubMenuClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HouseIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    "& span": {
                      fontSize: "0.9rem !important",
                      color:
                        location.pathname === "/dashboard" ||
                        location.pathname === "/alternativedashboard"
                          ? "rgba(0, 0, 0, 0.9)"
                          : "rgba(0, 0, 0, 0.5)",
                      "&:hover": {
                        color: "rgba(0, 0, 0, 0.9)",
                      },
                    },
                  }}
                />
                <ExpandLess
                  sx={{
                    display: open ? "block" : "none",
                    transform: openDashboardSubMenu
                      ? "rotate(180deg)"
                      : "rotate(90deg)",
                    transition: "0.2s",
                    fontSize: "1.2rem",
                    color:
                      location.pathname === "/dashboard" ||
                      location.pathname === "/alternativedashboard"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                  }}
                />
              </ListItemButton>
              <Collapse in={openDashboardSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/dashboard`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        D
                      </ListItemIcon>
                      <ListItemText
                        primary="Dashboard"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/dashboard`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/alternativedashboard"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/alternativedashboard`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        A
                      </ListItemIcon>
                      <ListItemText
                        primary="Alternative"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/alternativedashboard`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            <ListItem
              key="Examples"
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "#fff !important",
                },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  border: "none",
                }}
                onClick={handleExamplesSubMenuClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PermMediaIcon fontSize="small" color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Examples"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    "& span": {
                      fontSize: "0.9rem !important",
                      color:
                        location.pathname === "/examples/pricing" ||
                        location.pathname === "/examples/login" ||
                        location.pathname === "/examples/register" ||
                        location.pathname === "/examples/lock" ||
                        location.pathname === "/examples/timeline" ||
                        location.pathname === "/examples/profile"
                          ? "rgba(0, 0, 0, 0.9)"
                          : "rgba(0, 0, 0, 0.5)",
                      "&:hover": {
                        color: "rgba(0, 0, 0, 0.9)",
                      },
                    },
                  }}
                />
                <ExpandLess
                  sx={{
                    display: open ? "block" : "none",
                    transform: openExamplesSubMenu
                      ? "rotate(180deg)"
                      : "rotate(90deg)",
                    transition: "0.2s",
                    fontSize: "1.2rem",
                    color:
                      location.pathname === "/examples/pricing" ||
                      location.pathname === "/examples/login" ||
                      location.pathname === "/examples/register" ||
                      location.pathname === "/examples/lock" ||
                      location.pathname === "/examples/timeline" ||
                      location.pathname === "/examples/profile"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                  }}
                />
              </ListItemButton>
              <Collapse in={openExamplesSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link
                    to="/examples/pricing"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/examples/pricing`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        P
                      </ListItemIcon>
                      <ListItemText
                        primary="Pricing"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/examples/pricing`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/examples/login" style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/examples/login`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        L
                      </ListItemIcon>
                      <ListItemText
                        primary="Login"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/examples/login`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/examples/register"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/examples/register`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        R
                      </ListItemIcon>
                      <ListItemText
                        primary="Register"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/examples/register`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link to="/examples/lock" style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/examples/lock`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        L
                      </ListItemIcon>
                      <ListItemText
                        primary="Lock"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/examples/lock`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/examples/timeline"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/examples/timeline`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        T
                      </ListItemIcon>
                      <ListItemText
                        primary="Timeline"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/examples/timeline`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/examples/profile"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/examples/profile`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        P
                      </ListItemIcon>
                      <ListItemText
                        primary="Profile"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/examples/profile`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            <ListItem
              key="Components"
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "#fff !important",
                },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  border: "none",
                }}
                onClick={handleComponentsSubMenuClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <StorageIcon fontSize="small" color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Components"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    "& span": {
                      fontSize: "0.9rem !important",
                      color:
                        location.pathname === "/components/buttons" ||
                        location.pathname === "/components/cards" ||
                        location.pathname === "/components/grid" ||
                        location.pathname === "/components/notifications" ||
                        location.pathname === "/components/icons" ||
                        location.pathname === "/components/typography"
                          ? "rgba(0, 0, 0, 0.9)"
                          : "rgba(0, 0, 0, 0.5)",
                      "&:hover": {
                        color: "rgba(0, 0, 0, 0.9)",
                      },
                    },
                  }}
                />
                <ExpandLess
                  sx={{
                    display: open ? "block" : "none",
                    transform: openComponentsSubMenu
                      ? "rotate(180deg)"
                      : "rotate(90deg)",
                    transition: "0.2s",
                    fontSize: "1.2rem",
                    color:
                      location.pathname === "/components/buttons" ||
                      location.pathname === "/components/cards" ||
                      location.pathname === "/components/grid" ||
                      location.pathname === "/components/notifications" ||
                      location.pathname === "/components/icons" ||
                      location.pathname === "/components/typography"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                  }}
                />
              </ListItemButton>
              <Collapse in={openComponentsSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link
                    to="/components/buttons"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/components/buttons`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        B
                      </ListItemIcon>
                      <ListItemText
                        primary="Buttons"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/components/buttons`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/components/cards"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/components/cards`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        C
                      </ListItemIcon>
                      <ListItemText
                        primary="Cards"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/components/cards`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/components/grid"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/components/grid`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        G
                      </ListItemIcon>
                      <ListItemText
                        primary="Grid"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/components/grid`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/components/notifications"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/components/notifications`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        N
                      </ListItemIcon>
                      <ListItemText
                        primary="Notifications"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/components/notifications`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/components/icons"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/components/icons`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        I
                      </ListItemIcon>
                      <ListItemText
                        primary="Icons"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/components/icons`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/components/typography"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/components/typography`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        T
                      </ListItemIcon>
                      <ListItemText
                        primary="Typography"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/components/typography`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            <ListItem
              key="Forms"
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "#fff !important",
                },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  border: "none",
                }}
                onClick={handleFormsSubMenuClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ListAltIcon
                    fontSize="small"
                    sx={{ color: "rgb(243, 164, 181)" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Forms"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color:
                      location.pathname === "/forms/elements" ||
                      location.pathname === "/forms/components" ||
                      location.pathname === "/forms/validation"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                    "& span": {
                      fontSize: "0.9rem !important",
                      "&:hover": {
                        color: "rgba(0, 0, 0, 0.9)",
                      },
                    },
                  }}
                />
                <ExpandLess
                  sx={{
                    display: open ? "block" : "none",
                    transform: openFormsSubMenu
                      ? "rotate(180deg)"
                      : "rotate(90deg)",
                    transition: "0.2s",
                    fontSize: "1.2rem",
                    color:
                      location.pathname === "/forms/elements" ||
                      location.pathname === "/forms/components" ||
                      location.pathname === "/forms/validation"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                  }}
                />
              </ListItemButton>
              <Collapse in={openFormsSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/forms/elements" style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/forms/elements`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        E
                      </ListItemIcon>
                      <ListItemText
                        primary="Elements"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/forms/elements`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/forms/components"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/forms/components`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        C
                      </ListItemIcon>
                      <ListItemText
                        primary="Components"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/forms/components`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/forms/validation"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/forms/validation`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        V
                      </ListItemIcon>
                      <ListItemText
                        primary="Validation"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/forms/validation`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            <ListItem
              key="Tables"
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "#fff !important",
                },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  border: "none",
                }}
                onClick={handleTablesSubMenuClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <TocIcon fontSize="small" sx={{ color: "#000" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Tables"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color:
                      location.pathname === "/tables/tables" ||
                      location.pathname === "/tables/sortable" ||
                      location.pathname === "/tables/reactbstable"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                    "& span": {
                      fontSize: "0.9rem !important",
                      "&:hover": {
                        color: "rgba(0, 0, 0, 0.9)",
                      },
                    },
                  }}
                />
                <ExpandLess
                  sx={{
                    display: open ? "block" : "none",
                    transform: openTablesSubMenu
                      ? "rotate(180deg)"
                      : "rotate(90deg)",
                    transition: "0.2s",
                    fontSize: "1.2rem",
                    color:
                      location.pathname === "/tables/tables" ||
                      location.pathname === "/tables/sortable" ||
                      location.pathname === "/tables/reactbstable"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                  }}
                />
              </ListItemButton>
              <Collapse in={openTablesSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/tables/tables" style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/tables/tables`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        T
                      </ListItemIcon>
                      <ListItemText
                        primary="Tables"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/tables/tables`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/tables/sortable"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/tables/sortable`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        S
                      </ListItemIcon>
                      <ListItemText
                        primary="Sortable"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/tables/sortable`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/tables/reactbstable"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/tables/reactbstable`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        R
                      </ListItemIcon>
                      <ListItemText
                        primary="React BS Table"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/tables/reactbstable`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            <ListItem
              key="Maps"
              disablePadding
              sx={{
                display: "block",
                "&:hover": {
                  backgroundColor: "#fff !important",
                },
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  border: "none",
                }}
                onClick={handleMapsSubMenuClick}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MapIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Maps"
                  sx={{
                    opacity: open ? 1 : 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color:
                      location.pathname === "/maps/googlemaps" ||
                      location.pathname === "/maps/vectormaps"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                    "& span": {
                      fontSize: "0.9rem !important",
                      "&:hover": {
                        color: "rgba(0, 0, 0, 0.9)",
                      },
                    },
                  }}
                />
                <ExpandLess
                  sx={{
                    display: open ? "block" : "none",
                    transform: openMapsSubMenu
                      ? "rotate(180deg)"
                      : "rotate(90deg)",
                    transition: "0.2s",
                    fontSize: "1.2rem",
                    color:
                      location.pathname === "/maps/googlemaps" ||
                      location.pathname === "/maps/vectormaps"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(0, 0, 0, 0.5)",
                  }}
                />
              </ListItemButton>
              <Collapse in={openMapsSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link
                    to="/maps/googlemaps"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/maps/googlemaps`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        G
                      </ListItemIcon>
                      <ListItemText
                        primary="Google"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/maps/googlemaps`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                  <Link
                    to="/maps/vectormaps"
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3.5,
                        border: "none",
                        "&:hover": {
                          color: "rgba(0, 0, 0, 0.9)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          fontSize: "0.9rem !important",
                          textDecoration: "none",
                          color:
                            location.pathname === `/maps/vectormaps`
                              ? "rgba(0, 0, 0, 0.9)"
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)",
                          },
                        }}
                      >
                        V
                      </ListItemIcon>
                      <ListItemText
                        primary="Vector"
                        sx={{
                          opacity: open ? 1 : 0,
                          "& span": {
                            fontSize: "0.9rem !important",
                            textDecoration: "none",
                            color:
                              location.pathname === `/maps/vectormaps`
                                ? "rgba(0, 0, 0, 0.9)"
                                : "rgba(0, 0, 0, 0.5)",
                            "&:hover": {
                              color: "rgba(0, 0, 0, 0.9)",
                            },
                          },
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </ListItem>
            {["Widgets", "Charts", "Calendar"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#fff !important",
                  },
                }}
              >
                <Link
                  to={`/${text.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      border: "none",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {/* Your icon components */}
                      {index === 0 && (
                        <WidgetsIcon fontSize="small" color="success" />
                      )}
                      {index === 1 && (
                        <PieChartIcon fontSize="small" color="info" />
                      )}
                      {index === 2 && (
                        <EventIcon fontSize="small" color="info" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        "& span": {
                          fontSize: "0.9rem !important", // Adjust the font size as needed
                          color:
                            location.pathname === `/${text.toLowerCase()}`
                              ? "rgba(0, 0, 0, 0.9)" // Set your active text color
                              : "rgba(0, 0, 0, 0.5)",
                          "&:hover": {
                            color: "rgba(0, 0, 0, 0.9)", // Set your hover text color
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem
              sx={{
                display: open ? "block" : "none",
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                border: "none",
              }}
            >
              Documentation
            </ListItem>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    border: "none",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Outlet />
      </ThemeProvider>
    </Box>
  );
}
