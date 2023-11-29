import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Typography,
  Avatar,
  Divider,
  Button,
  Paper,
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
      avatarSrc: TeamMemberThree,
      onlineStatus: "In a Meeting",
    },
    {
      id: 4,
      name: "John Michelle",
      avatarSrc: TeamMemberFour,
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
    <Paper elevation={2}>
      <CssBaseline />
      <Card
        sx={{
          minHeight: "432px",
          maxHeight: "432px",
        }}
      >
        <CardHeader
          title="Team members"
          sx={{
            "& .MuiTypography-root": {
              fontSize: "17px !important",
              color: "#172B4D",
              fontWeight: "600",
            },
            padding: "20px 24px",
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
                    <div style={{ position: "relative" }}>
                      <div
                        className="ripple-dot"
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
                      <div
                        className="ripple-ring"
                        style={{
                          position: "absolute",
                          top: "30%",
                          left: "4%",
                          width: "14px",
                          height: "14px",
                          border: `4px solid ${getStatusColor(
                            member.onlineStatus
                          )}`,
                          borderRadius: "50%",
                          animation: "ripple 1.2s infinite ease-in-out",
                        }}
                      />
                    </div>
                    <small
                      style={{
                        fontSize: "12.8px",
                        color: "#525F7F",
                        fontWeight: 400,
                        marginTop: "3px",
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
                    background: "#5E72E4",
                    fontWeight: 600, // Adjust the font weight
                    padding: "4px !important", // Override the padding
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
    </Paper>
  );
}

export default TeamMembers;
