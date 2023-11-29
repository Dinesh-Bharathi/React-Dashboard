import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Divider,
  IconButton,
  TextField,
  Button,
  Checkbox,
  CssBaseline,
  Paper,
} from "@mui/material";
import { Add } from "@mui/icons-material";

function ListItem({ task, time, index, isLastItem }) {
  const colors = ["#2DCE89", "#FB6340", "#11CDEF", "#F5365C"];
  const backgroundColor = colors[index % colors.length];

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Grid
      container
      display={"flex"}
      alignItems={"center"}
      p={1}
      position="relative"
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          height: "60%",
          width: "3px",
          borderRadius: "8px",
          backgroundColor: backgroundColor,
        },
        padding: "1em 0.5em 1em 1.5em",
      }}
    >
      <Grid item xs={8}>
        <Typography
          variant="subtitle1"
          sx={{
            textDecoration: isChecked ? "line-through" : "none",
            fontSize: "1rem",
            fontWeight: "600",
            letterSpacing: "1px",
            color: "#32325D",
          }}
        >
          {task}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textDecoration: isChecked ? "line-through" : "none",
            fontSize: "12px",
            fontWeight: "400",
            color: "rgb(82, 95, 127);",
          }}
        >
          {time}
        </Typography>
      </Grid>
      <Grid item xs={4} textAlign={"right"}>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          sx={{
            color: backgroundColor,
            "&.Mui-checked": {
              color: backgroundColor,
            },
          }}
        />
      </Grid>
      {isLastItem ? null : <Divider />}
    </Grid>
  );
}

function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [newTime, setNewTime] = useState("");
  const [tasks, setTasks] = useState([
    { task: "Sample Task", time: "12:00 PM" },
    { task: "Call with Dave", time: "05:00 PM" },
  ]);
  const [displayInput, setDisplayInput] = useState(false);

  const handleAdd = () => {
    if (newTask.trim() !== "" && newTime.trim() !== "") {
      setTasks([...tasks, { task: newTask, time: newTime }]);
      setNewTask("");
      setNewTime("");
    }
    setDisplayInput(false);
  };

  const inputGridVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Ref for the TextField
  const textFieldRef = useRef();

  // useEffect to focus on the TextField when displayInput is true
  useEffect(() => {
    if (displayInput && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [displayInput]);

  return (
    <Paper elevation={2}>
      <CssBaseline />
      <Card
        sx={{
          minHeight: "432px",
          maxHeight: "432px",
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
            transitions: "width 1s, opacity 1s",
            opacity: 1,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#aaa",
            borderRadius: "8px",
            width: "5px",
            transition: "width 0.5s",
            opacity: 0,
            "&:hover": {
              width: "16px",
            },
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
            borderRadius: "8px",
            marginTop: "1.5em",
          },
        }}
      >
        <CardHeader
          title="To do list"
          action={
            <IconButton
              aria-label="add"
              onClick={() => setDisplayInput(!displayInput)}
              sx={{ padding: "4px", margin: "0 0.5em" }}
            >
              <Add />
            </IconButton>
          }
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
            padding: "16px !important",
            paddingBottom: "16px !important", // Adjusted padding bottom
          }}
        >
          {tasks.map((task, index) => (
            <div key={index}>
              <ListItem
                task={task.task}
                time={task.time}
                index={index}
                isLastItem={index === tasks.length - 1}
              />
              {index !== tasks.length - 1 && <Divider />}
            </div>
          ))}
        </CardContent>
        <motion.div
          variants={inputGridVariants}
          initial="hidden"
          animate={displayInput ? "visible" : "hidden"}
          transition={{ duration: 0.2 }}
          style={{ display: displayInput ? "block" : "none" }}
        >
          <Divider />
        </motion.div>
        <motion.div
          variants={inputGridVariants}
          initial="hidden"
          animate={displayInput ? "visible" : "hidden"}
          transition={{ duration: 0.2 }}
          style={{
            display: displayInput ? "block" : "none",
          }}
        >
          <Grid p={"0 16px 16px 16px"}>
            <TextField
              label="New Task"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              inputRef={textFieldRef} // Attach the ref to the TextField
            />
            <TextField
              label="Time"
              variant="outlined"
              type="text"
              fullWidth
              size="small"
              margin="normal"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAdd}>
              Add
            </Button>
          </Grid>
        </motion.div>
      </Card>
    </Paper>
  );
}

export default TodoList;
