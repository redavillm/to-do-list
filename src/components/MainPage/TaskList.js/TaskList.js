import styles from "./TaskList.module.css";
import { useCreateTasksList } from "../../../hooks/use-create-tasks-list";
import { useFindTasksList } from "../../../hooks/use-find-tasks-list";
import { useSortTasksList } from "../../../hooks/use-sort-tasks-list";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const isSorting = useSelector(select);

  const list = useCreateTasksList();
  const sortedList = useSortTasksList({ isSorting });
  const findList = useFindTasksList({ findingTask, isSorting });

  return (
    <div className={styles.list}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : findingTask !== "" ? (
        findList
      ) : isSorting ? (
        sortedList
      ) : (
        list
      )}
    </div>
  );
};
