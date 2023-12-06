import styles from "./TaskList.module.css";
import { useCreateTasksList } from "../../../hooks/use-create-tasks-list";
import { useFindTasksList } from "../../../hooks/use-find-tasks-list";
import { useSortTasksList } from "../../../hooks/use-sort-tasks-list";
import { useSelector } from "react-redux";
import {
  selectFindingTask,
  selectIsLoading,
  selectIsSorting,
} from "../../../store/selectors";

export const TaskList = () => {
  const isSorting = useSelector(selectIsSorting);
  const isLoading = useSelector(selectIsLoading);
  const findingTask = useSelector(selectFindingTask);

  const list = useCreateTasksList();
  const sortedList = useSortTasksList();
  const findList = useFindTasksList();

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
