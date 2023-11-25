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

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 50,
  }),
  overflowX: "hidden",
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
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      border: "none",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      border: "none",
    },
  }),
}));

export default function MiniDrawer() {
  const globalTheme = createTheme({});
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [hoverOpen, setHoverOpen] = React.useState(false);

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
  // console.log("hoverOpen", hoverOpen);
  // console.log("open", open);

  return (
    <>
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
            <IconButton
              onClick={handleMenuClick}
              sx={{ transform: !open && "translateX(6px)" }}
            >
              {hoverOpen ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <List sx={{ paddingTop: "2.5em" }}>
            {[
              "Dashboard",
              "Examples",
              "Components",
              "Forms",
              "Tables",
              "Map",
              "Widgets",
              "Charts",
              "Calendar",
            ].map((text, index) => (
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
                        <HouseIcon fontSize="small" color="primary" />
                      )}
                      {index === 1 && (
                        <PermMediaIcon fontSize="small" color="error" />
                      )}
                      {index === 2 && (
                        <StorageIcon fontSize="small" color="info" />
                      )}
                      {index === 3 && (
                        <ListAltIcon
                          fontSize="small"
                          sx={{ color: "rgb(243, 164, 181)" }}
                        />
                      )}
                      {index === 4 && (
                        <TocIcon fontSize="small" sx={{ color: "#000" }} />
                      )}
                      {index === 5 && (
                        <MapIcon fontSize="small" color="primary" />
                      )}
                      {index === 6 && (
                        <WidgetsIcon fontSize="small" color="success" />
                      )}
                      {index === 7 && (
                        <PieChartIcon fontSize="small" color="info" />
                      )}
                      {index === 8 && (
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
    </>
  );
}
