import Task from "./Task";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskState } from "../lib/store";

export default function TaskList() {
  const tasks = useSelector((state) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((task) => task.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((task) => task.state !== "TASK_PINNED"),
    ];

    return tasksInOrder.filter(
      (task) => task.state === "TASK_INBOX" || task.state === "TASK_PINNED"
    );
  });

  const { status } = useSelector((state) => state.taskbox);
  const dispatch = useDispatch();

  const pinTask = (value) => {
    dispatch(updateTaskState({ id: value, state: "TASK_PINNED" }));
  };

  const archiveTask = (value) => {
    dispatch(updateTaskState({ id: value, state: "TASK_ARCHIVED" }));
  };

  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span> <span>cool</span> <span>state</span>{" "}
      </span>
    </div>
  );

  if (status === "loading") {
    return (
      <div className='list-items' data-testid='loading' key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items' key={"empty"} data-testid={"empty"}>
        <div className='wrapper-message'>
          <span className='icon-check'>
            <p className='title-message'>You have no tasks</p>
            <p className='subtitle-message'>Sit back and relax</p>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className='list-items'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onArchiveTask={(task) => archiveTask(task.id)}
          onPinTask={(task) => pinTask(task.id)}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
};
TaskList.defaultProps = {
  loading: false,
};
