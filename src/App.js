import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/8f3e2fab-7aca-4163-b5be-ea48fedcc5f5")
      .then((loadedData) => loadedData.json())
      .then((loadedTasks) => setTasks(loadedTasks));
  });

  return (
    <div className={styles.app}>
      <h1>Tasks list</h1>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <button className={styles.menu_btn}>Sort by ABC</button>
          {/* <button className={styles.menu_btn}>+ Add new task +</button> */}
          <form>
            <input className={styles.menu_search}></input>
            <button className={styles.menu_btn}>Search</button>
          </form>
        </div>
        <div className={styles.list}>
          {tasks.map(({ id, text }) => (
            <div id={id} className={styles.task}>
              {id + ". "}
              {text}
              <button className={styles.del_btn}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
