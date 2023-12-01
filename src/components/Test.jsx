import {
  Box,
  Card,
  CssBaseline,
  Grid,
  CardHeader,
  Avatar,
  IconButton,
  useTheme,
  ThemeProvider,
  CardContent,
  Typography,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import theme from "../assets/styles/theme";

const CustomStylesForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    city: "",
    state: "",
    zip: "",
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    userName: false,
    city: false,
    state: false,
    zip: false,
    agreeTerms: false,
  });

  const validateForm = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please check the fields.");
    }
  };

  return (
    <Card>
      <CardHeader title="Custom styles" />
      <Divider />
      <CardContent>
        <Box padding={2}>
          <Typography
            variant="subtitle2"
            fontWeight={300}
            sx={{
              lineHeight: 1.7,
              fontSize: "1rem",
              color: "#525F7F",
            }}
          >
            For custom form validation messages, you’ll need to add the
            novalidate boolean attribute to your {`<form>`}. This disables the
            browser default feedback tooltips, but still provides access to the
            form validation APIs in JavaScript.
          </Typography>
          <Typography
            mt={2}
            fontWeight={300}
            sx={{
              lineHeight: 1.7,
              fontSize: "1rem",
              color: "#525F7F",
            }}
          >
            When attempting to submit, you’ll see the{" "}
            <span style={{ color: "#F3A4B5" }}>invalid</span> and{" "}
            <span style={{ color: "#F3A4B5" }}>valid</span> styles applied to
            your form controls.
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardContent sx={{ padding: " 1em 2em" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <FormLabel>First name</FormLabel>
              <TextField size="small" fullWidth placeholder="First name" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>Last name</FormLabel>
              <TextField size="small" fullWidth placeholder="Last name" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormLabel>User name</FormLabel>
              <TextField size="small" fullWidth placeholder="User name" />
            </Grid>
          </Grid>
          <Grid container spacing={4} mt={0}>
            <Grid item xs={12} sm={6}>
              <FormLabel>City</FormLabel>
              <TextField size="small" fullWidth placeholder="City" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormLabel>State</FormLabel>
              <TextField size="small" fullWidth placeholder="State" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormLabel>Zip</FormLabel>
              <TextField size="small" fullWidth placeholder="Zip code" />
            </Grid>
          </Grid>
          <Grid item xs={12} p={"1em 0"}>
            <FormControlLabel
              label="Agree to terms and conditions"
              control={
                <Checkbox
                  value=""
                  checked={false}
                  //   onChange={}
                  color="primary"
                />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit form
            </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

const Form = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgb(17, 205, 239) 40vh, rgb(245, 245, 255) 40vh)`,
        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BreadCrumbs />
        <Grid container spacing={4} sx={{ padding: "0 2em" }}>
          <Grid item xs={12}>
            <CustomStylesForm />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Form;
