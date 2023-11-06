import styles from "./TaskList.module.css";
import { useContext } from "react";
import { LoadingContext } from "../../../context";
import { useCreateTasksList } from "../../../hooks/use-create-tasks-list";
import { useFindTasksList } from "../../../hooks/use-find-tasks-list";
import { useSortTasksList } from "../../../hooks/use-sort-tasks-list";

export const TaskList = ({ findingTask, isSorting }) => {
  const { isLoading } = useContext(LoadingContext);

  const list = useCreateTasksList();
  const sortedList = useSortTasksList({ isSorting });
  const findList = useFindTasksList({ findingTask, isSorting });


  <>Sorry, something is going wrong, try again later.</>;
  
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
