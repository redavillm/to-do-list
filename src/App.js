import styles from "./App.module.css";
import { useState } from "react";
import { ModalWindows } from "./components/ModalWindow/ModalWindow";
import { useGetTaskList } from "./hooks";
import { createTasksList, sortTasksList, findTasksList } from "./scripts";

function App() {
  const [visibleModalWindow, setVisibleModalWindow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [isSerching, setIsSerching] = useState(true);
  const [findingTask, setFindingTask] = useState("");
  const [isSorting, setIsSorting] = useState(false);

  const { setIsLoading, isLoading, tasks } = useGetTaskList();

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
            <button
              className={styles.menu_btn}
              onClick={() => {
                setIsSerching(!isSerching);
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div className={styles.list}>
          {isLoading ? (
            <div className={styles.loader}></div>
          ) : findingTask !== "" ? (
            findTasksList({ findingTask, tasks, setIsLoading })
          ) : isSorting ? (
            sortTasksList({ tasks, setIsLoading })
          ) : (
            createTasksList({ tasks, setIsLoading })
          )}
        </div>
      </div>

      <ModalWindows
        showModalNewTaskWindow={showModalNewTaskWindow}
        newTask={newTask}
        setNewTask={setNewTask}
        setIsLoading={setIsLoading}
        visibleModalkWindow={visibleModalWindow}
      />
    </div>
  );
}

export default App;
