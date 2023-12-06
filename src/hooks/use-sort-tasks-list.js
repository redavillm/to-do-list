import { useSelector } from "react-redux";
import { Task } from "../components/Task/Task";
import { selectTasks } from "../store/selectors";

export const useSortTasksList = () => {
  const tasks = useSelector(selectTasks);
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
        <Task id={id} text={text} index={index} />
      </div>
    ));
};
