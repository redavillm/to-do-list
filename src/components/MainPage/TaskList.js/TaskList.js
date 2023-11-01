import styles from "./TaskList.module.css";
import {
  createTasksList,
  findTasksList,
  sortListTasks,
} from "../../../scripts";

export const TaskList = ({
  isLoading,
  findingTask,
  tasks,
  setIsLoading,
  refreshList,
  isSorting,
}) => {
  return (
    <div className={styles.list}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : findingTask !== "" ? (
        findTasksList({
          findingTask,
          tasks,
          setIsLoading,
          refreshList,
        })
      ) : isSorting ? (
        sortListTasks({ tasks, setIsLoading, refreshList, isSorting })
      ) : (
        createTasksList({ tasks })
      )}
    </div>
  );
};
