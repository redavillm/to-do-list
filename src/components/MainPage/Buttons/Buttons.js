import { RefreshContext } from "../../../context";
import styles from "./Buttons.module.css";
import { useContext } from "react";

export const Buttons = ({
  setSorting,
  findingTask,
  setFindingTask,
  showModalNewTaskWindow,
}) => {
  const { refreshList } = useContext(RefreshContext);

  return (
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
  );
};
