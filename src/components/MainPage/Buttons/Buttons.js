import { useDispatch } from "react-redux";
import styles from "./Buttons.module.css";
import { CHANGE_REFRESH_LIST_FLAG } from "../../../store/actions.js/change-refresh-flag-list";
import { CHANGE_IS_SORTING } from "../../../store/actions.js/change-is-sorting";
import { NEW_TASK_MODAL_FLAG } from "../../../store/selectors/new-task-modal-flag";
import { setFindingTask } from "../../../store/actions.js/set-finding-task";

export const Buttons = () => {
  const dispatch = useDispatch();

  const refreshList = () => {
    dispatch(CHANGE_REFRESH_LIST_FLAG);
  };

  const setSorting = () => {
    dispatch(CHANGE_IS_SORTING);
  };

  const showModalNewTaskWindow = () => {
    dispatch(NEW_TASK_MODAL_FLAG);
  };

  let findingTask = "";

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
          onChange={({ target }) => dispatch(setFindingTask(target.value))}
        ></input>
      </form>
    </div>
  );
};
