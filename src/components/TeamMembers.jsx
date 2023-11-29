import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TeamMemberOne from "../assets/images/Team-member-1.jpg";
import TeamMemberTwo from "../assets/images/Team-member-2.jpg";
import TeamMemberThree from "../assets/images/Team-member-4.jpg";
import TeamMemberFour from "../assets/images/Team-member-3.jpg";

function TeamMembers() {
  const members = [
    {
      id: 1,
      name: "John Michale",
      avatarSrc: TeamMemberOne,
      onlineStatus: "Online",
    },
    {
      id: 2,
      name: "Alex Smith",
      avatarSrc: TeamMemberTwo,
      onlineStatus: "Offline",
    },
    {
      id: 3,
      name: "Samantha Ivy",
      avatarSrc: TeamMemberFour,
      onlineStatus: "In a Meeting",
    },
    {
      id: 4,
      name: "John Michelle",
      avatarSrc: TeamMemberThree,
      onlineStatus: "Online",
    },
    // Add more members as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Online":
        return "#2DCE89";
      case "Offline":
        return "#F5365C";
      case "In a Meeting":
        return "#FB6340";
      default:
        return "gray";
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Card sx={{ minHeight: "432px", maxHeight: "432px" }}>
        <CardHeader
          title="Team members"
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
          {members.map((member, index) => (
            <div key={member.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px", // Adjust the padding
                }}
              >
                <Avatar
                  src={member.avatarSrc}
                  alt={member.name}
                  sx={{ height: "60px", width: "60px" }}
                />
                <div style={{ marginLeft: "16px", flex: 1 }}>
                  <Typography fontWeight={500} color={"#32325D"}>
                    {member.name}
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: getStatusColor(member.onlineStatus),
                        marginLeft: "5px",
                        marginRight: "5px",
                        display: "inline-block",
                      }}
                    />
                    <small
                      style={{
                        fontSize: "12.8px",
                        color: "#525F7F",
                        fontWeight: 400,
                      }}
                    >
                      {member.onlineStatus}
                    </small>
                  </div>
                </div>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    fontWeight: 600, // Adjust the font weight
                    padding: "4px 8px !important", // Override the padding
                  }}
                >
                  Add
                </Button>
              </div>
              {index !== members.length - 1 && <Divider variant="middle" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default TeamMembers;
