import { ThemeProvider } from "@emotion/react";
import React, { useState, useCallback } from "react";
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
  FormControl,
  FormLabel,
  FormHelperText,
  Chip,
  Switch,
  Slider,
  ListItem,
  IconButton,
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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, DateRangePicker } from "@mui/x-date-pickers-pro";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";

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

const TextEditor = () => {
  const [editorValue, setEditorValue] = useState("");

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Text editor" />
      <Divider />
      <CardContent>
        <ReactQuill
          value={editorValue}
          onChange={handleEditorChange}
          theme="snow"
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "image"],
              // ["clean"],
            ],
          }}
          style={{ height: "100px", marginBottom: "46px" }}
        />
      </CardContent>
    </Card>
  );
};

const AdatePicker = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  const handleDateRangeChange = (newDateRange) => {
    setSelectedDateRange(newDateRange);
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Date Range Picker" />
      <Divider />
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              "& .MuiInputBase-input": {
                height: "10px",
              },
            }}
          />
        </LocalizationProvider>
      </CardContent>
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangePicker
            startText="Start Date"
            endText="End Date"
            value={selectedDateRange}
            onChange={handleDateRangeChange}
            renderInput={(startProps, endProps) => (
              <>
                <TextField
                  {...startProps}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  helperText=""
                />
                <TextField
                  {...endProps}
                  variant="standard"
                  margin="normal"
                  fullWidth
                  helperText=""
                />
              </>
            )}
            sx={{
              "& .MuiInputBase-input": {
                height: "10px",
              },
            }}
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
};

const Tags = () => {
  const [tags, setTags] = useState(["BUCHAREST", "CLUj", "IASI", "TIMISOARA"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Card>
      <CardHeader title="Tags" />
      <Divider />
      <CardContent>
        <div
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "0.5em" }}
        >
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() => handleDeleteTag(tag)}
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                background: "#172b4d",
                color: "#fff",
                fontWeight: "600",
                fontSize: "0.5rem",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>
        <TextField
          size="small"
          fullWidth
          placeholder="Add a tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddTag();
            }
          }}
          InputProps={{
            endAdornment: (
              <Typography
                variant="body2"
                color="primary"
                onClick={handleAddTag}
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                Add
              </Typography>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
};

const ToggleButtons = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="ToggleButtons" />
      <Divider />
      <CardContent>
        <Switch defaultChecked color="default" />
        <Switch defaultChecked color="info" />
        <Switch defaultChecked color="secondary" />
        <Switch defaultChecked color="success" />
        <Switch defaultChecked color="warning" />
        <Switch defaultChecked color="error" />
        <Switch defaultChecked color="primary" />
      </CardContent>
    </Card>
  );
};

const Sliders = () => {
  const [sliderOneValue, setSliderOneValue] = useState(45);
  const [sliderRangeValues, setSliderRangeValues] = useState([30, 70]);

  const handleSliderOneChange = (event, newValue) => {
    setSliderOneValue(newValue);
  };

  const handleSliderRangeChange = (event, newRangeValues) => {
    setSliderRangeValues(newRangeValues);
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Sliders" />
      <Divider />
      <CardContent>
        <Slider value={sliderOneValue} onChange={handleSliderOneChange} />
        <Typography
          sx={{
            background: "rgba(33, 37, 41, 0.7)",
            display: "inline-block",
            padding: "0.2em 0.5em",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "0.8rem",
            mt: 1,
          }}
        >
          {sliderOneValue}
        </Typography>
      </CardContent>
      <CardContent>
        <Slider
          value={sliderRangeValues}
          onChange={handleSliderRangeChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => value}
          min={0}
          max={100}
        />
        <Typography
          sx={{
            background: "rgba(33, 37, 41, 0.7)",
            display: "inline-block",
            padding: "0.2em 0.5em",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "0.8rem",
            mt: 1,
          }}
        >
          {`${sliderRangeValues[0]} - ${sliderRangeValues[1]}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Dropzone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Handle dropped files here
      setFiles([...files, ...acceptedFiles]);
    },
    [files]
  );

  const handleDeleteFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Card sx={{ mt: 3 }}>
      <CardHeader title="Dropzone" />
      <Divider />

      <CardContent>
        <div {...getRootProps()} style={dropzoneStyles}>
          <input {...getInputProps()} />
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#aaa",
              background: "#eee",
              display: "inline-block",
            }}
          >
            Drag 'n' drop some files here, or click to select files
          </Typography>
        </div>
        {files.length > 0 && (
          <ul style={{ marginTop: "0.8em" }}>
            {files.map((file, index) => (
              <ListItem key={file.name} sx={{ p: 0 }}>
                <Grid container>
                  <Grid item xs={4} sm={2}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{
                        width: "90%",
                        height: { xs: "90px", sm: "120px" },
                        objectFit: "cover",
                        objectPosition: "cover",
                        borderRadius: "6px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={7} sm={9}>
                    <Typography
                      sx={{
                        margin: "0px 0px 0.5rem",
                        fontWeight: "600",
                        fontSize: "0.9375rem",
                        lineHeight: 1.5,
                        color: "rgb(50, 50, 93)",
                      }}
                    >
                      {file.name}
                    </Typography>
                    <Typography sx={{ color: "rgb(82, 95, 127)" }}>
                      {formatBytes(file.size)}{" "}
                      <span style={{ fontWeight: "400", color: "#999" }}>
                        MB
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton
                      onClick={() => handleDeleteFile(index)}
                      sx={{
                        background: "red",
                        color: "#fff",
                        "&:hover": {
                          background: "rgba(255,0,0,0.8)",
                          borderRadius: "8px",
                          transition: "0.5s",
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

const dropzoneStyles = {
  border: "2px dotted #ccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const formatBytes = (bytes) => {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2);
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
              <AdatePicker /> {/* Updated: Use AdatePicker here */}
              <TextEditor />
            </Grid>
            <Grid item xs={12} md={6}>
              <Tags />
              <ToggleButtons />
              <Sliders />
              <Dropzone />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default FormComponents;
