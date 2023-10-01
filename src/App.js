import { useState } from "react";
import styles from "./App.module.css";
import { ModalWindows } from "./components/ModalWindow";
import { useRequestGetTasksList } from "./hooks";
import { createTasksList, findTasksList, sortListTasks } from "./scripts";

function App() {
  const [visibleModalWindow, setVisibleModalWindow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [refreshListFlag, setRefreshListFlag] = useState(false);
  const [findingTask, setFindingTask] = useState("");
  const [isSorting, setIsSorting] = useState(false);

  const refreshList = () => setRefreshListFlag(!refreshListFlag);

  const { tasks, isLoading, setIsLoading } = useRequestGetTasksList({
    refreshListFlag,
  });

  const showModalNewTaskWindow = () => {
    setVisibleModalWindow(!visibleModalWindow);
  };

  const setSorting = () => {
    setIsSorting(!isSorting);
  };

  return (
    <div className={styles.app}>
      <h1>Tasks list</h1>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <button className={styles.menu_btn} onClick={showModalNewTaskWindow}>
            + Add new task +
          </button>
          <button className={styles.menu_btn} onClick={setSorting}>
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
            findTasksList({ findingTask, tasks, setIsLoading, refreshList })
          ) : isSorting ? (
            sortListTasks({ tasks, setIsLoading, refreshList })
          ) : (
            createTasksList({ tasks, setIsLoading, refreshList })
          )}
        </div>
      </div>

      <ModalWindows
        showModalNewTaskWindow={showModalNewTaskWindow}
        newTask={newTask}
        setNewTask={setNewTask}
        setIsLoading={setIsLoading}
        visibleModalkWindow={visibleModalWindow}
        refreshList={refreshList}
      />
    </div>
  );
}

export default App;
