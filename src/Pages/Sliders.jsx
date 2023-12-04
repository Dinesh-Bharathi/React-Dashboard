import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Slider,
} from "@mui/material";

export const Sliders = () => {
  const [sliderOneValue, setSliderOneValue] = useState(45);

  const handleSliderOneChange = (event, newValue) => {
    setSliderOneValue(newValue);
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
      <CardContent></CardContent>
    </Card>
  );
};
