import { Task } from "../components/Task/Task";
import { useRequestGetTasksList } from "./use-requst-get-task-list";

export const useCreateTasksList = () => {
  const { tasks } = useRequestGetTasksList();

  return tasks.map(({ id, text }, index) => (
    <div>
      <Task id={id} text={text} index={index} />
    </div>
  ));
};
