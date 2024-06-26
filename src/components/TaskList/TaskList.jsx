import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constans";

import css from "./TaskList.module.css";
import Taska from "../Task/Taska";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const statusFilter = useSelector((state) => state.filters.status);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Taska task={task} />
        </li>
      ))}
    </ul>
  );
};
