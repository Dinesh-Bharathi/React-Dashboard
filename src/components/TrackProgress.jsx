import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

const items = [
  {
    id: 1,
    title: "Argon Design System",
    avatar:
      "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/bootstrap.bd712487.jpg",
    progress: 55,
  },
  {
    id: 2,
    title: "Angular Now UI Kit Pro",
    avatar:
      "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/angular.b5045666.jpg", // Add the correct URL here
    progress: 95,
  },
  {
    id: 3,
    title: "Black Dashboard",
    avatar:
      "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/sketch.a6af780a.jpg", // Add the correct URL here
    progress: 62,
  },
  {
    id: 4,
    title: "Material Dashboard React",
    avatar:
      "https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/react.0e8c9066.jpg", // Add the correct URL here
    progress: 85,
  },
];

const colors = ["warning", "success", "error", "info"];

const ListItem = ({ title, progress, avatar, isLastItem }) => (
  <>
    <Grid
      container
      display={"flex"}
      alignItems={"center"}
      p={1}
      position="relative"
      sx={{
        padding: "1em 0.5em 1em 1.5em",
      }}
    >
      <Grid item xs={2}>
        <Avatar src={avatar} sx={{ height: "50px", width: "50px" }} />
      </Grid>
      <Grid item xs={10} padding={"0px 0 0 20px"} width={"100%"}>
        <Typography sx={{ mb: "12px" }}>{title}</Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          color={colors[items.findIndex((item) => item.title === title)]}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#eee",
          }}
        />
      </Grid>
    </Grid>
    {!isLastItem && <Divider />}
  </>
);

function TrackProgress() {
  return (
    <Card
      sx={{
        minHeight: "432px",
        maxHeight: "432px",
        overflow: "hidden",
      }}
    >
      <CardHeader
        title="Track Progress"
        sx={{
          "& .MuiTypography-root": {
            fontSize: "17px !important",
            color: "#172B4D",
            fontWeight: "600",
          },
        }}
      />
      <Divider />
      <CardContent
        sx={{
          padding: "14px !important",
          paddingBottom: "14px !important", // Adjusted padding bottom
        }}
      >
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            title={item.title}
            progress={item.progress}
            avatar={item.avatar}
            isLastItem={index === items.length - 1}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default TrackProgress;
