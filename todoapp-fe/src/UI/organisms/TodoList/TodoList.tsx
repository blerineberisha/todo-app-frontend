import "./TodoList.scss";
import Task, { TaskProps } from "../../molecules/Task/Task";
import TaskCreationDialog from "../TaskCreationDialog";

interface TodoListProps {
  name: string;
  tasks: TaskProps[];
}

function TodoList(props: TodoListProps) {
  const tasks = props.tasks.map((prop) => <Task {...prop} />);

  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <h1>{props.name}</h1>
        <TaskCreationDialog />
      </div>
      <div className="TodoList-tasks">{tasks}</div>
    </div>
  );
}

export default TodoList;
