import { Checkbox, IconButton, Paper, ThemeProvider } from "@mui/material";
import "./Task.scss";
import { MoreHoriz, RadioButtonUnchecked, TaskAlt } from "@mui/icons-material";
import { useState } from "react";
import { TaskState } from "../../../types/TaskState";
import theme from "../../Theme";
import Strikethrough from "../../atoms/Strikethrough/Strikethrough";

export type TaskProps = {
  key: number;
  name: string;
  description?: string;
  state: TaskState;
};

function Task(props: TaskProps) {
  const [state, setState] = useState(props.state);

  function toggleState() {
    if (state !== TaskState.CLOSED) setState(TaskState.CLOSED);
    else setState(TaskState.OPEN);
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
          <Strikethrough condition={state === TaskState.CLOSED}>
            {props.name}
          </Strikethrough>
        </div>
        <IconButton className="Task-more-button">
          <MoreHoriz className="Task-more-icon" />
        </IconButton>
      </Paper>
    </ThemeProvider>
  );
}

export default Task;
