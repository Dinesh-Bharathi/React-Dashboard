import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import MiniDrawer from "./components/MiniDrawer";
import Dashboard from "./Pages/Dashboard";
import NoPage from "./Pages/NoPage";
import AppBar from "./components/AppBar";

function App() {
  const location = useLocation();
  const [displayLoader, setDisplayLoader] = useState(false);

  useEffect(() => {
    setDisplayLoader(true);
    setTimeout(() => {
      setDisplayLoader(false);
    }, 2000);
  }, [location]);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
          <AppBar />
          <Box sx={{ width: "100%", zIndex: "2" }}>
            {displayLoader && <LinearProgress color="success" />}
          </Box>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
