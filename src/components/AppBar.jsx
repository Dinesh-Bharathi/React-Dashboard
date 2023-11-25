import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Avatar from "@mui/material/Avatar";

function AppBar() {
  return (
    <div className="navbar">
      <div>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "50px",
            boxShadow:
              "rgba(50, 50, 93, 0.15) 0px 1px 3px, rgba(0, 0, 0, 0.02) 0px 1px 0px",
          }}
        >
          <IconButton size="small" sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon fontSize="small" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search "
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>
      </div>
      <div style={{ display: "flex" }}>
        <IconButton
          size="small"
          sx={{ p: "10px", color: "#fff" }}
          aria-label="menu"
        >
          <NotificationsIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{ p: "10px", color: "#fff" }}
          aria-label="menu"
        >
          <FileCopyIcon fontSize="small" />
        </IconButton>
        <Avatar src="" alt="profile image" />
      </div>
    </div>
  );
}

export default AppBar;
