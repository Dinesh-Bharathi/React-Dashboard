import React, { useState, useEffect } from "react";
import { Box, CircularProgress, CssBaseline, Switch } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import MiniDrawer from "./components/MiniDrawer";
import Dashboard from "./Pages/Dashboard";
import NoPage from "./Pages/NoPage";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const [displayLoader, setDisplayLoader] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [displayMiniDrawer, setDisplayMiniDrawer] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(windowWidth > 900);

  useEffect(() => {
    setDisplayLoader(true);
    setTimeout(() => {
      setDisplayLoader(false);
    }, 2000);
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Box sx={{ display: windowWidth > 900 && "flex" }}>
          <MiniDrawer display={displayMiniDrawer} windowWidth={windowWidth} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "100%",
              background: "rgb(245, 245, 255)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                zIndex: "2",
                height: "4px",
                background: "rgb(17, 205, 239)",
              }}
            >
              {displayLoader && <LinearProgress color="warning" />}
            </Box>
            <AppBar
              checked={darkMode}
              change={toggleDarkMode}
              drawerState={displayMiniDrawer}
              miniDrawer={setDisplayMiniDrawer}
            />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/*" element={<NoPage />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
