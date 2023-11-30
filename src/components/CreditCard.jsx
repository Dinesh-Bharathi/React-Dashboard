import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Button,
  CardContent,
  Stack,
  LinearProgress,
} from "@mui/material";
import React from "react";

const CreditCard = () => {
  const theme = useTheme();
  return (
    <Box>
      <Card
        sx={{
          background:
            "linear-gradient(87deg, rgb(23, 43, 77), rgb(26, 23, 77)) !important",
        }}
      >
        <CardHeader
          title={
            <Box>
              <Box pb={1}>
                <Typography
                  sx={{
                    color: theme.palette.background.paper,
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  <sup style={{ fontSize: "70%", fontWeight: "400" }}>$</sup>{" "}
                  3,300
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(206, 212, 218)",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Your current balance
                </Typography>
                <Typography>
                  <span
                    style={{
                      color: " rgb(45, 206, 137)",
                      marginRight: "0.5rem",
                    }}
                  >
                    + 15%
                  </span>
                  <span style={{ color: "rgb(206, 212, 218)" }}>($250)</span>
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100%",
                  padding: "0",
                  background: theme.palette.background.paper,
                  color: theme.palette.primary.main,
                  fontWeight: "200",
                  fontSize: "0.8rem",
                  "&:hover": {
                    background: theme.palette.background.paper,
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                Add Credit
              </Button>
            </Box>
          }
        />
        <CardContent sx={{ p: "1em 1.5em" }}>
          <Stack direction={"row"} spacing={2}>
            <Box width={"100%"}>
              <Typography
                sx={{
                  color: "rgb(206, 212, 218)",
                  fontSize: "80%",
                  fontWeight: 400,
                }}
              >
                Orders: 60%
              </Typography>
              <Box mt={0.8}>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={60}
                  sx={{ borderRadius: "10px" }}
                />
              </Box>
            </Box>
            <Box width={"100%"}>
              <Typography
                sx={{
                  color: "rgb(206, 212, 218)",
                  fontSize: "80%",
                  fontWeight: 400,
                }}
              >
                Sales: 40%
              </Typography>
              <Box mt={0.8}>
                <LinearProgress
                  variant="determinate"
                  color="warning"
                  value={40}
                  sx={{ borderRadius: "10px" }}
                />
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreditCard;
