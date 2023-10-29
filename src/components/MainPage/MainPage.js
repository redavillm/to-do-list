import styles from "./MainPage.module.css";
import { useState } from "react";
import { ModalWindows } from "../ModalWindow/ModalWindow";
import { createTasksList, findTasksList, sortListTasks } from "../../scripts";
import { useRequestGetTasksList } from "../../hooks";

export const MainPage = ({ refreshListFlag, refreshList }) => {
  const [visibleModalWindow, setVisibleModalWindow] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  const [findingTask, setFindingTask] = useState("");

  const { tasks, isLoading, setIsLoading } = useRequestGetTasksList({
    refreshListFlag,
  });

  const showModalNewTaskWindow = () =>
    setVisibleModalWindow(!visibleModalWindow);

  const setSorting = () => {
    setIsSorting(!isSorting);
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <button className={styles.menu_btn} onClick={showModalNewTaskWindow}>
            + Add new task +
          </button>
          <button
            className={styles.menu_btn}
            onClick={() => {
              setSorting();
              refreshList();
            }}
          >
            Sort by ABC
          </button>
          <form>
            <input
              placeholder="Find task..."
              className={styles.search_input}
              value={findingTask}
              onChange={({ target }) => setFindingTask(target.value)}
            ></input>
          </form>
        </div>
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
      </div>

      <ModalWindows
        showModalNewTaskWindow={showModalNewTaskWindow}
        setIsLoading={setIsLoading}
        visibleModalkWindow={visibleModalWindow}
        refreshList={refreshList}
      />
    </div>
  );
};
