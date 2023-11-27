import React from "react";
import { Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import notFoundImage from "../assets/images/404error.jpg";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(-40px)",
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <motion.div variants={itemVariants}>
            <Grid item textAlign={"center"}>
              <img
                src={notFoundImage}
                alt="404 Illustration"
                style={{
                  width: "100%",
                  height: "50vh",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Grid>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Grid item textAlign={"center"} sx={{ mb: "0.5em" }}>
              <Typography variant="h4" color="textSecondary">
                Page is under construction.
              </Typography>
            </Grid>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Grid item textAlign={"center"} sx={{ mb: "1em" }}>
              <Typography variant="body1" color="textSecondary">
                Check back later for any updates.
              </Typography>
            </Grid>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Grid item textAlign={"center"}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="large"
              >
                Go to Home
              </Button>
            </Grid>
          </motion.div>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default NotFound;
