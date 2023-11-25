// NotFound.js
import React from "react";
import { Typography, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import notFoundImage from "../assets/images/404.jpg";

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
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <motion.div variants={itemVariants}>
            <Grid item textAlign={"center"}>
              <img
                src={notFoundImage}
                alt="404 Illustration"
                style={{ width: "50%", marginTop: "20px", textAlign: "center" }}
              />
            </Grid>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Grid item>
              <Typography
                variant="h4"
                color="textSecondary"
                sx={{ m: "0.5em" }}
              >
                Oops! Page not found.
              </Typography>
            </Grid>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Grid item sx={{ mb: "1em" }}>
              <Typography variant="body1" color="textSecondary">
                The page you are looking for might be under construction or does
                not exist.
              </Typography>
            </Grid>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Grid item>
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
