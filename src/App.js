import { Box, Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MiniDrawer from "./components/MiniDrawer";
import Dashboard from "./Pages/Dashboard";
import NoPage from "./Pages/NoPage";
import AppBar from "./components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
          <AppBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
