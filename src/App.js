import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { requestAddNewTask, requestUpdateTask } from "./scripts";

function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleNewTaskWindow, setVisibleNewTaskWindow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [visibleEditTaskWindow, setVisibleEditTaskWindow] = useState(false);
  const [changedTask, setChangedTask] = useState("");
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
    setVisibleNewTaskWindow(!visibleNewTaskWindow);
  };

  const showModalEditTaskWindow = () => {
    setVisibleEditTaskWindow(!visibleEditTaskWindow);
  };

  return (
    <div className={styles.app}>
      <h1>Tasks list</h1>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <button className={styles.menu_btn} onClick={showModalNewTaskWindow}>
            + Add new task +
          </button>
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
              <div id={id} className={styles.task}>
                {text}
                <div>
                  <button
                    className={styles.del_btn}
                    onClick={showModalEditTaskWindow}
                  >
                    Edit
                  </button>
                  <button className={styles.del_btn}>X</button>
                  <div
                    className={
                      visibleEditTaskWindow
                        ? styles.modal_edit_task_window
                        : styles.modal_none
                    }
                  >
                    <div className={styles.modal_box}>
                      <div className={styles.modal_btn_wrapper}>
                        <button onClick={showModalEditTaskWindow}>X</button>
                      </div>
                      <div className={styles.modal_title}>Edit your task</div>
                      <form
                        onSubmit={() =>
                          requestUpdateTask(
                            id,
                            setIsLoading,
                            changedTask,
                            refreshList
                          )
                        }
                      >
                        <input
                          className={styles.modal_input}
                          type="text"
                          name="task"
                          value={changedTask}
                          onChange={({ target }) =>
                            setChangedTask(target.value)
                          }
                        ></input>
                        <br></br>
                        <button
                          className={styles.modal_btn}
                          type="submit"
                          disabled={changedTask === ""}
                          onClick={showModalEditTaskWindow}
                        >
                          Edit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div
        className={
          visibleNewTaskWindow
            ? styles.modal_new_task_window
            : styles.modal_none
        }
      >
        <div className={styles.modal_box}>
          <div className={styles.modal_btn_wrapper}>
            <button onClick={showModalNewTaskWindow}>X</button>
          </div>
          <div className={styles.modal_title}>Describe your task</div>
          <form onSubmit={() => requestAddNewTask({ newTask, setIsLoading })}>
            <input
              className={styles.modal_input}
              type="text"
              name="task"
              value={newTask}
              onChange={({ target }) => setNewTask(target.value)}
            ></input>
            <button
              className={styles.modal_btn}
              type="submit"
              disabled={newTask === ""}
            >
              Add task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
