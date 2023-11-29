import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import Image1 from "../assets/images/Team-member-1.jpg";
import Image2 from "../assets/images/Team-member-2.jpg";
import Image3 from "../assets/images/Team-member-3.jpg";
import Image4 from "../assets/images/Team-member-4.jpg";
import AddIcon from "@mui/icons-material/Add";
import { ModeComment, Share, ThumbUp } from "@mui/icons-material";

const theme = createTheme({
  overrides: {
    MuiLink: {
      root: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  },
  customStyles: {
    "& .custom-link .link-text": {
      textDecoration: "none",
    },
  },
});

function ActivityFeed() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <Card>
          <CardHeader
            title="Activity feed"
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
              padding: "20px 24px !important",
            }}
          >
            <Box>
              <Grid
                container
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs={6} display={"flex"} alignItems={"center"}>
                  <Avatar
                    src={Image1}
                    variant="rounded"
                    sx={{ height: "50px", width: "50px" }}
                  />
                  <Grid pl={2}>
                    <Typography
                      sx={{
                        color: "rgb(33, 37, 41)",
                        fontWeight: "500",
                      }}
                    >
                      John Snow
                    </Typography>
                    <Typography
                      variant="overline"
                      sx={{ fontWeight: "500", color: "#8898AA" }}
                    >
                      3 days ago
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} textAlign={"right"}>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<AddIcon sx={{ margin: "0 !important" }} />}
                    sx={{ padding: "4px 8px", background: "#5E72E4" }}
                  >
                    Follow
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <CardContent
            sx={{
              padding: "24px !important",
              paddingBottom: "24px !important", // Adjusted padding bottom
            }}
          >
            <Typography
              color={"rgb(82, 95, 127)"}
              lineHeight={"1.7"}
              mb={"24px"}
              sx={{ fontWeight: 200 }}
            >
              Personal profiles are the perfect way for you to grab their
              attention and persuade recruiters to continue reading your CV
              because you’re telling them from the off exactly why they should
              hire you.
            </Typography>
            <CardMedia
              component="img"
              alt="activity feeds"
              height="auto"
              image="https://demos.creative-tim.com/argon-dashboard-pro-material-ui-v4/static/media/img-1-1000x600.3869811c.jpg"
              sx={{ borderRadius: "6px" }}
            />
            <Grid container mt={1}>
              <Grid item xs={6} display={"flex"} alignItems={"center"}>
                <Link
                  className="custom-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    marginRight: "0.5rem",
                  }}
                >
                  <ThumbUp color="info" sx={{ fontSize: "1rem" }} />
                  <span style={{ color: "#8898AA", marginLeft: "0.4em" }}>
                    150
                  </span>
                </Link>
                <Link
                  className="custom-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 0.5em",
                    textDecoration: "none",
                    marginRight: "0.5rem",
                  }}
                >
                  <ModeComment sx={{ fontSize: "1rem", color: "#111111" }} />
                  <span style={{ color: "#8898AA", marginLeft: "0.4em" }}>
                    150
                  </span>
                </Link>
                <Link
                  className="custom-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    marginRight: "0.5rem",
                  }}
                >
                  <Share sx={{ fontSize: "1rem", color: "#111111" }} />
                  <span style={{ color: "#8898AA", marginLeft: "0.4em" }}>
                    150
                  </span>
                </Link>
              </Grid>
              <Divider />
              <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"center"}
              >
                <AvatarGroup>
                  <Avatar
                    alt="Remy Sharp"
                    src={Image1}
                    sx={{ height: "20px", width: "20px" }}
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={Image3}
                    sx={{ height: "20px", width: "20px" }}
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src={Image4}
                    sx={{ height: "20px", width: "20px" }}
                  />
                </AvatarGroup>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#525F7F",
                    paddingLeft: "0.4em",
                    fontSize: "0.8rem",
                  }}
                >
                  and 30+ more
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardContent
            sx={{
              padding: "20px 24px !important",
            }}
          >
            <Box pb={2}>
              <Grid container display={"flex"} alignItems={"baseline"}>
                <Grid item>
                  <Avatar src={Image2} sx={{ height: "50px", width: "50px" }} />
                </Grid>
                <Grid item xs={10} padding={"0 0 0 1.5em"}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      color: "#555588",
                      margin: "0.8em 0",
                    }}
                  >
                    Michale Lewis
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: 200,
                      color: "#525F7F",
                    }}
                  >
                    Cras sit amet nibh libero nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio vestibulum in vulputate
                    viverra turpis.
                  </Typography>
                  <Grid display={"flex"} alignItems={"center"} mt={1}>
                    <Link
                      className="custom-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        marginRight: "0.5rem",
                      }}
                    >
                      <ThumbUp color="info" sx={{ fontSize: "1rem" }} />
                      <span style={{ color: "#8898AA", marginLeft: "0.4em" }}>
                        3 likes
                      </span>
                    </Link>
                    <Link
                      className="custom-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        marginRight: "0.5rem",
                      }}
                    >
                      <Share sx={{ fontSize: "1rem", color: "#111111" }} />
                      <span style={{ color: "#8898AA", marginLeft: "0.4em" }}>
                        3 shares
                      </span>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box pb={2}>
              <Grid container display={"flex"} alignItems={"baseline"}>
                <Grid item>
                  <Avatar src={Image2} sx={{ height: "50px", width: "50px" }} />
                </Grid>
                <Grid item xs={10} padding={"0 0 0 1.5em"}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      color: "#555588",
                      margin: "0.8em 0",
                    }}
                  >
                    Michale Lewis
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: 200,
                      color: "#525F7F",
                    }}
                  >
                    Cras sit amet nibh libero nulla vel metus scelerisque ante
                    sollicitudin. Cras purus odio vestibulum in vulputate
                    viverra turpis.
                  </Typography>
                  <Grid display={"flex"} alignItems={"center"} mt={1}>
                    <Link
                      className="custom-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        marginRight: "0.5rem",
                      }}
                    >
                      <ThumbUp color="info" sx={{ fontSize: "1rem" }} />
                      <span style={{ color: "#8898AA", marginLeft: "0.4em" }}>
                        3 likes
                      </span>
                    </Link>
                    <Link
                      className="custom-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        marginRight: "0.5rem",
                      }}
                    >
                      <Share sx={{ fontSize: "1rem", color: "#111111" }} />
                      <span style={{ color: "#8898AA", marginLeft: "0.4em" }}>
                        3 shares
                      </span>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box display={"flex"} alignItems={"center"} pt={"32px"} pb={"10px"}>
              <Avatar src={Image4} sx={{ height: "58px", width: "58px" }} />
              <TextField
                size="small"
                placeholder="Write your comment"
                fullWidth
                sx={{ marginLeft: "2em" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </ThemeProvider>
  );
}

export default ActivityFeed;
