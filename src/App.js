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
  const [findingTask, setFindingTask] = useState("");
  const [isSorting, setIsSorting] = useState(false);

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

  const setSorting = () => {
    setIsSorting(!isSorting);
  };

  const createTasksList = () => {
    return (
      tasks
        // .sort(function (a, b) {
        //   return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        // })
        .map(({ id, text }, index) => (
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
        ))
    );
  };

  const findTasksList = (string) => {
    return tasks
      .filter((task) => task.text.includes(string))
      .map(({ id, text }, index) => (
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

  const sortListTasks = () => {
    return tasks
      .sort(function (a, b) {
        let x = a.text ? a.text.toLowerCase() : "";
        let y = b.text ? b.text.toLowerCase() : "";
        return x < y ? -1 : x > y ? 1 : 0;
      })
      .map(({ id, text }, index) => (
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
            findTasksList(findingTask)
          ) : isSorting ? (
            sortListTasks()
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
