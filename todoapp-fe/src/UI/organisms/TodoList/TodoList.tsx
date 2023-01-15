import Task, { TaskProps } from "../../molecules/Task/Task";

interface TodoListProps {
  tasks: TaskProps[];
}

function TodoList(props: TodoListProps) {
  const tasks = props.tasks.map((element) => <Task {...element} />);

  return <div className="TodoList">{tasks}</div>;
}

export default TodoList;
