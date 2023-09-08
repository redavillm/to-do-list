import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { ModalWindows } from "./components/ModalWindow";
import { requestRemoveTask } from "./scripts";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const [visibleModalWindow, setVisibleModalWindow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refreshListFlag, setRefreshListFlag] = useState(false);
  // const [findingTask, setFindingTask] = useState("");

  const refreshList = () => setRefreshListFlag(!refreshListFlag);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/tasks")
      .then((loadedData) => loadedData.json())
      .then((loadedTasks) => {
        setTasks(loadedTasks);
      })
      .finally(() => setIsLoading(false));
  }, [refreshListFlag]);

  const showModalNewTaskWindow = () => {
    setVisibleModalWindow(!visibleModalWindow);
  };

  const createTasksList = () => {
    return tasks.map(({ id, text }, index) => (
      <div>
        <Task
          id={id}
          text={text}
          index={index}
          requestRemoveTask={requestRemoveTask}
          setIsLoading={setIsLoading}
          refreshList={refreshList}
        />
      </div>
    ));
  };

  // const findTasksList = (string) => {
  //   return tasks
  //     .filter((task) => task.text === string)
  //     .map(({ id, text }, index) => (
  //       <div>
  //         <Task
  //           id={id}
  //           text={text}
  //           index={index}
  //           requestRemoveTask={requestRemoveTask}
  //           setIsLoading={setIsLoading}
  //           refreshList={refreshList}
  //         />
  //       </div>
  //     ));
  // };

  return (
    <div className={styles.app}>
      <h1>Tasks list</h1>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <button className={styles.menu_btn} onClick={showModalNewTaskWindow}>
            + Add new task +
          </button>
          <button className={styles.menu_btn}>Sort by ABC</button>
          <form>
            <input
              placeholder="Find task..."
              className={styles.search_input}
            ></input>
            <button className={styles.menu_btn}>Search</button>
          </form>
        </div>
        <div className={styles.list}>
          {isLoading ? (
            <div className={styles.loader}></div>
          ) : (
            createTasksList()
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
