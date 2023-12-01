import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "../assets/styles/theme";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BreadCrumbs from "../components/BreadCrumbs";
import {
  CreditCard,
  Email,
  LocationOn,
  Person,
  Phone,
  Public,
  Visibility,
} from "@mui/icons-material";

const InputGroups = () => {
  return (
    <Card>
      <CardHeader title="Input groups" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              fullWidth
              placeholder="Your name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "#adb5bd", fontSize: "0.875rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              fullWidth
              placeholder="Email address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#adb5bd", fontSize: "0.875rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              fullWidth
              placeholder="Location"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LocationOn
                      sx={{ color: "#adb5bd", fontSize: "0.875rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              fullWidth
              placeholder="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Visibility
                      sx={{ color: "#adb5bd", fontSize: "0.875rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              fullWidth
              placeholder="Payment me"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography sx={{ color: "#adb5bd", fontSize: "0.875rem" }}>
                      USD
                    </Typography>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCard
                      sx={{ color: "#adb5bd", fontSize: "0.875rem" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              fullWidth
              placeholder="Phone number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Phone sx={{ color: "#adb5bd", fontSize: "0.875rem" }} />
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <Public sx={{ color: "#adb5bd", fontSize: "0.875rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Dropdowns = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Dropdowns" />
      <Divider />
      <CardContent>
        <Select sx={{ width: "100%", height: "44px" }}>
          <MenuItem></MenuItem>
        </Select>
      </CardContent>
    </Card>
  );
};

const DatePicker = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Datepicker" />
      <Divider />
      <CardContent></CardContent>
    </Card>
  );
};
const FormComponents = () => {
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
          title={
            <Typography sx={{ fontSize: { xs: "1rem", sm: "20px" } }}>
              Components
            </Typography>
          }
          firstLink={"Forms"}
          secondLink={"Components"}
        />
        <Box padding={"0 2em"}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <InputGroups />
              <Dropdowns />
              <DatePicker />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader />
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default FormComponents;
