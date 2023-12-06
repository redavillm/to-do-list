import { useSelector } from "react-redux";
import { Task } from "../components/Task/Task";
import { selectFindingTask, selectTasks } from "../store/selectors";

export const useFindTasksList = () => {
  const tasks = useSelector(selectTasks);
  const findingTask = useSelector(selectFindingTask);
  if (!tasks) {
    return false;
  }
  return tasks
    .filter((task) => task.text.includes(findingTask))
    .map(({ id, text }, index) => (
      <div>
        <Task id={id} text={text} index={index} />
      </div>
    ));
};
