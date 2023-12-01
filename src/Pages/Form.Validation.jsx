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
    firstName: "Mark",
    lastName: "Otto",
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

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Basic validation for non-empty fields
    for (const key in formData) {
      if (formData[key] === "") {
        newFormErrors[key] = true;
        isValid = false;
      } else {
        newFormErrors[key] = false;
      }
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkbox, use checked property
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

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
        <Box padding={2} sx={{ width: { xs: "100%", md: "70" } }}>
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
      <CardContent sx={{ padding: "1em 2em" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {["firstName", "lastName", "userName"].map((field) => (
              <Grid item xs={12} sm={4} key={field}>
                <FormLabel>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </FormLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  error={formErrors[field]}
                  helperText={
                    formErrors[field] &&
                    [field.charAt(0).toUpperCase() + field.slice(1)] +
                      " " +
                      " is required"
                  }
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4} mt={0}>
            {["city", "state", "zip"].map((field) => (
              <Grid item xs={12} sm={4} key={field}>
                <FormLabel>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </FormLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  error={formErrors[field]}
                  helperText={
                    formErrors[field] &&
                    [field.charAt(0).toUpperCase() + field.slice(1)] +
                      " " +
                      " is required"
                  }
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} p={"1em 0"}>
            <FormControlLabel
              label="Agree to terms and conditions"
              control={
                <Checkbox
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  color="primary"
                  required
                />
              }
              sx={{}}
            />
            {formErrors.agreeTerms && (
              <FormHelperText error>This field is required</FormHelperText>
            )}
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

const BrowserDefaultsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "Mark",
    lastName: "Otto",
    userName: "",
    city: "",
    state: "",
    zip: "",
    agreeTerms: false,
  });

  const [fieldSuccess, setFieldSuccess] = useState({
    firstName: false,
    lastName: false,
    userName: false,
    city: false,
    state: false,
    zip: false,
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkbox, use checked property
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));

    // Add success state logic if needed
    if (value.trim() !== "") {
      setFieldSuccess((prevSuccess) => ({
        ...prevSuccess,
        [name]: true,
      }));
    } else {
      setFieldSuccess((prevSuccess) => ({
        ...prevSuccess,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The browser will handle form validation
    console.log("Form submitted:", formData);
  };

  return (
    <Card>
      <CardHeader title="Browser defaults" />
      <Divider />
      <CardContent>
        <Box padding={2} sx={{ width: { xs: "100%", md: "70%" } }}>
          <Typography
            variant="subtitle2"
            fontWeight={300}
            sx={{
              lineHeight: 1.7,
              fontSize: "1rem",
              color: "#525F7F",
            }}
          >
            Not interested in custom validation feedback messages or writing
            JavaScript to change form behaviors? All good, you can use the
            browser defaults. Try submitting the form below. Depending on your
            browser and OS, you’ll see a slightly different style of feedback.
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
            While these feedback styles cannot be styled with CSS, you can still
            customize the feedback text through JavaScript.
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardContent sx={{ padding: "1em 2em" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {["firstName", "lastName", "userName"].map((field) => (
              <Grid item xs={12} sm={4} key={field}>
                <FormLabel>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </FormLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  sx={
                    fieldSuccess[field]
                      ? { borderColor: "green !important" } // Set success border color
                      : {}
                  }
                />
                {fieldSuccess[field] && (
                  <FormHelperText style={{ color: "green" }}>
                    Looks good!
                  </FormHelperText>
                )}
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4} mt={0}>
            {["city", "state", "zip"].map((field) => (
              <Grid item xs={12} sm={4} key={field}>
                <FormLabel>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </FormLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} p={"1em 0"}>
            <FormControlLabel
              label="Agree to terms and conditions"
              control={
                <Checkbox
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  color="primary"
                  required
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

const ServerSideForm = () => {
  const [formData, setFormData] = useState({
    firstName: "Mark",
    lastName: "Otto",
    userName: "",
    city: "",
    state: "",
    zip: "",
    agreeTerms: false,
  });

  const [fieldSuccess, setFieldSuccess] = useState({
    firstName: false,
    lastName: false,
    userName: false,
    city: false,
    state: false,
    zip: false,
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkbox, use checked property
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));

    // Add success state logic if needed
    if (value.trim() !== "") {
      setFieldSuccess((prevSuccess) => ({
        ...prevSuccess,
        [name]: true,
      }));
    } else {
      setFieldSuccess((prevSuccess) => ({
        ...prevSuccess,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The browser will handle form validation
    console.log("Form submitted:", formData);
  };

  return (
    <Card>
      <CardHeader title="Server side" />
      <Divider />
      <CardContent>
        <Box padding={2} sx={{ width: { xs: "100%", md: "70%" } }}>
          <Typography
            variant="subtitle2"
            fontWeight={300}
            sx={{
              lineHeight: 1.7,
              fontSize: "1rem",
              color: "#525F7F",
            }}
          >
            We recommend using client side validation, but in case you require
            server side, you can indicate invalid and valid form fields with
            <span style={{ color: "#F3A4B5" }}>color="success"</span> and
            <span style={{ color: "#F3A4B5" }}>color="error"</span>. Note that
            <span style={{ color: "#F3A4B5" }}>
              theme.palette.error.main
            </span>{" "}
            and{" "}
            <span style={{ color: "#F3A4B5" }}>theme.palette.success.main</span>{" "}
            are also supported.
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
            While these feedback styles cannot be styled with CSS, you can still
            customize the feedback text through JavaScript.
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardContent sx={{ padding: "1em 2em" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {["firstName", "lastName", "userName"].map((field) => (
              <Grid item xs={12} sm={4} key={field}>
                <FormLabel>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </FormLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                  sx={
                    fieldSuccess[field]
                      ? { borderColor: "green !important" } // Set success border color
                      : {}
                  }
                />
                {fieldSuccess[field] && (
                  <FormHelperText style={{ color: "green" }}>
                    Looks good!
                  </FormHelperText>
                )}
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4} mt={0}>
            {["city", "state", "zip"].map((field) => (
              <Grid item xs={12} sm={4} key={field}>
                <FormLabel>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </FormLabel>
                <TextField
                  size="small"
                  fullWidth
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} p={"1em 0"}>
            <FormControlLabel
              label="Agree to terms and conditions"
              control={
                <Checkbox
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  color="primary"
                  required
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

const ValidationForm = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgb(17, 205, 239) 40vh, rgb(245, 245, 255) 40vh)`,
        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BreadCrumbs
          title={"Validation"}
          firstLink={"Forms"}
          secondLink={"Validation"}
        />
        <Grid container spacing={4} sx={{ padding: "0 2em" }} mb={4}>
          <Grid item xs={12}>
            <CustomStylesForm />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ padding: "0 2em" }} mb={4}>
          <Grid item xs={12}>
            <BrowserDefaultsForm />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ padding: "0 2em" }}>
          <Grid item xs={12}>
            <ServerSideForm />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default ValidationForm;
