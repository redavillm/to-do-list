import { Task } from "../components/Task/Task";
import { useRequestGetTasksList } from "./use-requst-get-task-list";

export const useSortTasksList = ({ isSorting }) => {
  const { tasks } = useRequestGetTasksList();
  if (!tasks) {
    return false;
  }
  return tasks
    .sort(function (a, b) {
      let x = a.text ? a.text.toLowerCase() : "";
      let y = b.text ? b.text.toLowerCase() : "";
      return x < y ? -1 : x > y ? 1 : 0;
    })
    .map(({ id, text }, index) => (
      <div>
        <Task id={id} text={text} index={index} isSorting={isSorting} />
      </div>
    ));
};
