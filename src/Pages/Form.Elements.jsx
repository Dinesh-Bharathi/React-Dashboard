import {
  Box,
  CssBaseline,
  ThemeProvider,
  Grid,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Divider,
  CardContent,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
  FormControlLabel,
  Switch,
  Drawer,
  Select,
  MenuItem,
  Typography,
  InputAdornment,
  Button,
  Checkbox,
  Radio,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import theme from "../assets/styles/theme";

const FormGroupInGrid = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Form group in grid" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <FormLabel>One of three columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of three columns"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>One of three columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of three columns"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>One of three columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of three columns"
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} mt={1}>
              <Grid item xs={12} sm={3}>
                <FormLabel>One of four columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of four columns"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormLabel>One of four columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of four columns"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormLabel>One of four columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of four columns"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormLabel>One of four columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of four columns"
                />
              </Grid>
            </Grid>
            <Grid container spacing={4} mt={1} mb={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel>One of two columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of two columns"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>One of two columns</FormLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="One of two columns"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const FormControls = () => {
  return (
    <Card>
      <CardHeader title="Form controls" />
      <Divider />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <FormLabel>Email address</FormLabel>
            <TextField type="email" fullWidth size="small" />
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormLabel>Example select</FormLabel>
            <Select sx={{ width: "100%", height: "44px" }}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormLabel>Example multiple select</FormLabel>
            <TextField id="" label="" select fullWidth size="small">
              <MenuItem />
            </TextField>
          </Grid>
          <Grid item xs={12} mt={2}>
            <FormLabel>Example textarea</FormLabel>
            <TextareaAutosize
              minRows={7}
              style={{
                borderColor: "#aaa",
                width: "100%",
                borderRadius: "4px",
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Sizes = () => {
  return (
    <Card>
      <CardHeader title="Sizes" />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormLabel>Large input</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              size="large"
              placeholder="Large input"
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Default input</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Default input"
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Small input</FormLabel>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              placeholder="Small input"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const TextInputs = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Text inputs" />
      <Divider />
      <CardContent>
        <FormLabel>Basic textarea</FormLabel>
        <TextareaAutosize
          minRows={7}
          style={{
            borderColor: "#aaa",
            width: "100%",
            borderRadius: "4px",
          }}
        />
      </CardContent>
    </Card>
  );
};

const Html5Inputs = () => {
  return (
    <Card sx={{ mt: 4 }}>
      <CardHeader title="HTML5 inputs" />
      <CardContent>
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Text</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              id=""
              label=""
              type="text"
              value="John Snow"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Search</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              id=""
              label=""
              type="search"
              value="Tell me your secret ..."
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Email</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              id=""
              label=""
              type="email"
              value="argon@emample.com"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Url</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              type="url"
              value="https://www.creative-tim.com"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Phone</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              type="tel"
              value="40-(770)-888-444"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Password</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              type="password"
              value="password"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Number</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField type="number" value="23" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Datetime</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              type="datetime-local"
              value="2021-11-23T10:30:00"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Date</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField type="date" value="2021-11-23" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Month</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField type="month" value="2021-11" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Week</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField type="week" value="2021-W23" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Time</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField type="time" value="10:30:00" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "", sm: "center" },
          }}
        >
          <Grid item xs={2} display={"flex"} justifyContent={"start"}>
            <FormLabel>Colour</FormLabel>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField type="color" value="#5e72e4" size="small" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const FormSelect = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Select" />
      <Divider />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <FormLabel>Basic select</FormLabel>
            <Select sx={{ width: "100%", height: "44px" }}>
              <MenuItem value={10} sx={{ margin: "0 0.5em" }}>
                1
              </MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={30}>4</MenuItem>
              <MenuItem value={30}>5</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item xs={12}>
            <FormLabel>Disabled basic select</FormLabel>
            <Select sx={{ width: "100%", height: "44px" }} value={1} disabled>
              <MenuItem value={10} sx={{ margin: "0 0.5em" }}>
                1
              </MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={30}>4</MenuItem>
              <MenuItem value={30}>5</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid container mt={3}>
          <Grid item xs={12}>
            <FormLabel>Multiple select</FormLabel>
            <Select multiple value={[]} sx={{ width: "100%", height: "44px" }}>
              <MenuItem value={10} sx={{ margin: "0 0.5em" }}>
                1
              </MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={30}>4</MenuItem>
              <MenuItem value={30}>5</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item xs={12}>
            <FormLabel>Multiple select disabled</FormLabel>
            <Select
              multiple
              value={[]}
              sx={{ width: "100%", height: "44px" }}
              disabled
            >
              <MenuItem value={10} sx={{ margin: "0 0.5em" }}>
                1
              </MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={30}>4</MenuItem>
              <MenuItem value={30}>5</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const FileBrowser = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="File browser" />
      <Divider />
      <CardContent>
        <TextField
          type="file"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Browse</InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
};

const CheckBoxes = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Check boxes and radios" />
      <Divider />
      <CardContent>
        <Grid container>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Checkbox />
            <Typography color={"#8898AA"}>Unchecked</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Radio />
            <Typography color={"#8898AA"}>Unchecked</Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Checkbox checked />
            <Typography color={"#8898AA"}>Checked</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Radio checked />
            <Typography color={"#8898AA"}>Checked</Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Checkbox disabled />
            <Typography color={"#8898AA"}>Unchecked</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Radio disabled />
            <Typography color={"#8898AA"}>Unchecked</Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Checkbox checked disabled />
            <Typography color={"#8898AA"}>Checked</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            sx={{ padding: "0 15px" }}
          >
            <Radio checked disabled />
            <Typography color={"#8898AA"}>Checked</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ElementsForm = () => {
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
          title={"Elements"}
          firstLink={"Forms"}
          secondLink={"Elements"}
        />
        <Box padding={" 0 2em"}>
          <FormGroupInGrid />
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={6}>
              <FormControls />
              <Html5Inputs />
            </Grid>
            <Grid item xs={12} md={6}>
              <Sizes />
              <TextInputs />
              <FormSelect />
              <FileBrowser />
              <CheckBoxes />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default ElementsForm;
