import { Task } from "../components/Task/Task";
import { useRequestGetTasksList } from "./use-requst-get-task-list";

export const useFindTasksList = ({ findingTask, isSorting }) => {
  const { tasks } = useRequestGetTasksList();
  if (!tasks) {
    return false;
  }
  return tasks
    .filter((task) => task.text.includes(findingTask))
    .map(({ id, text }, index) => (
      <div>
        <Task id={id} text={text} index={index} isSorting={isSorting} />
      </div>
    ));
};
