import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((loadedData) => loadedData.json())
      .then((loadedTasks) => {
        setTasks(loadedTasks.slice(0, 10));
      });
  });

  return (
    <div className={styles.app}>
      <h1>Tasks list</h1>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          {/* <button className={styles.menu_btn}>Sort by ABC</button> */}
          {/* <button className={styles.menu_btn}>+ Add new task +</button> */}
          {/* <form>
            <input className={styles.menu_search}></input>
            <button className={styles.menu_btn}>Search</button>
          </form> */}
        </div>
        <div className={styles.list}>
          {tasks.map(({ id, title }) => (
            <div id={id} className={styles.task}>
              {id + ". "}
              {title}
              {/* <button className={styles.del_btn}>X</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
