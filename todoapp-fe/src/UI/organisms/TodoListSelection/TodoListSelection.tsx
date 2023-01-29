import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "./TodoListSelection.scss";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { TaskProps } from "../../molecules/Task/Task";

export type TodoListSelectionProps = {
  items: {
    key: number;
    label: string;
    tasks: TaskProps[];
  }[];
};

export default function TodoListSelection(props: TodoListSelectionProps) {
  const [selected, setSelected] = useState(1);

  const items = props.items.map((itemProps) => (
    <ListItem
      key={itemProps.key}
      disablePadding
      className={`TodoListSelection-item${
        itemProps.key === selected ? "-selected" : ""
      }`}
      secondaryAction={
        <IconButton className="TodoListSelection-item-delete" edge="end">
          <Delete />
        </IconButton>
      }
      color="primary-main"
    >
      <ListItemButton
        onClick={() => {
          setSelected(itemProps.key);
        }}
      >
        <ListItemText primary={itemProps.label} />
      </ListItemButton>
    </ListItem>
  ));

  let selectedList = props.items.find((v) => v.key === selected);

  return (
    <div className="TodoListSelection">
      <List className="TodoListSelection-list">{items}</List>
      <TodoList
        name={selectedList?.label || "Label not found"}
        tasks={selectedList?.tasks || []}
      />
    </div>
  );
}
