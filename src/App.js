import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { ModalWindows } from "./components/ModalWindow";
import { EditModalWindow } from "./components/EditModalWindow";
import { requestRemoveTask } from "./scripts";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleModalkWindow, setVisibleModalkWindow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refreshListFlag, setRefreshListFlag] = useState(false);

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
    setVisibleModalkWindow(!visibleModalkWindow);
  };

  return (
    <div className={styles.app}>
      <h1>Tasks list</h1>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <button className={styles.menu_btn} onClick={showModalNewTaskWindow}>
            + Add new task +
          </button>
          <button className={styles.menu_btn}>Edit your task</button>
          <button className={styles.menu_btn}>Sort by ABC</button>
          {/* <form>
            <input className={styles.search_input}></input>
            <button className={styles.menu_btn}>Search</button>
          </form> */}
        </div>
        <div className={styles.list}>
          {isLoading ? (
            <div className={styles.loader}></div>
          ) : (
            tasks.map(({ id, text }) => (
              <div>
                <Task
                  id={id}
                  text={text}
                  requestRemoveTask={requestRemoveTask}
                  setIsLoading={setIsLoading}
                  refreshList={refreshList}
                />
                <EditModalWindow
                  showModalNewTaskWindow={showModalNewTaskWindow}
                  newTask={newTask}
                  setIsLoading={setIsLoading}
                  setNewTask={setNewTask}
                  visibleModalkWindow={visibleModalkWindow}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <ModalWindows
        showModalNewTaskWindow={showModalNewTaskWindow}
        newTask={newTask}
        setIsLoading={setIsLoading}
        setNewTask={setNewTask}
        visibleModalkWindow={visibleModalkWindow}
      />
    </div>
  );
}

export default App;
