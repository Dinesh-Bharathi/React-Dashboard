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
    onClick={handleSubMenuClick}
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
      primary="Examples"
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
        transform: openSubMenu ? "rotate(180deg)" : "rotate(90deg)",
        transition: "0.2s",
        fontSize: "1.2rem",
      }}
    />
  </ListItemButton>
  <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
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
    </List>
  </Collapse>
</ListItem>;
