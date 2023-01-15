import { Checkbox, IconButton, Paper, ThemeProvider } from "@mui/material";
import "./Task.scss";
import { MoreHoriz, RadioButtonUnchecked, TaskAlt } from "@mui/icons-material";
import { useState } from "react";
import { TaskState } from "../../../types/TaskState";
import theme from "../../Theme";

export type TaskProps = {
  name: string;
  description?: string;
  state: TaskState;
};

function Task(props: TaskProps) {
  const [state, setState] = useState(props.state);

  function toggleState() {
    switch (state) {
      case TaskState.CLOSED:
        setState(TaskState.OPEN);
        break;
      case (TaskState.IN_PROGRESS, TaskState.OPEN):
        setState(TaskState.CLOSED);
        break;
    }
  }

  function handleMoreClick() {
    // AAAAAA
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper
        className={`Task-paper${state === TaskState.CLOSED ? "-closed" : ""}`}
      >
        <div className="Task-state-toggler" onClick={toggleState}>
          <Checkbox
            checked={state === TaskState.CLOSED}
            icon={<RadioButtonUnchecked className="Task-checkbox-unchecked" />}
            checkedIcon={<TaskAlt className="Task-checkbox-checked" />}
          />
          <span
            className={`Task-name${
              state === TaskState.CLOSED ? "-closed" : ""
            }`}
          >
            {props.name}
          </span>
        </div>
        <IconButton className="Task-more-button" onClick={handleMoreClick}>
          <MoreHoriz className="Task-more-icon" />
        </IconButton>
      </Paper>
    </ThemeProvider>
  );
}

export default Task;
