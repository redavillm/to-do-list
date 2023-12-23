import { useSelector } from "react-redux";
import { Task } from "../components/Task/Task";
import { selectTasks } from "../store/selectors";

export const useCreateTasksList = () => {
  const tasks = useSelector(selectTasks);

  return tasks
    ?.sort((a, b) => a.id - b.id)
    .map(({ id, text }, index) => (
      <div>
        <Task id={id} text={text} index={index} />
      </div>
    ));
};
