import { useDispatch } from "react-redux";
import styles from "./Buttons.module.css";
import { CHANGE_REFRESH_LIST_FLAG } from "../../../store/actions.js/change-refresh-flag-list";
import { CHANGE_IS_SORTING } from "../../../store/actions.js/change-is-sorting";
import { setFindingTask } from "../../../store/actions.js/action-creators/set-finding-task";
import { SHOW_MODAL_NEW_TASK } from "../../../store/actions.js/show-modal-new-task";

export const Buttons = () => {
  const dispatch = useDispatch();

  const refreshList = () => {
    dispatch(CHANGE_REFRESH_LIST_FLAG);
  };

  const setSorting = () => {
    dispatch(CHANGE_IS_SORTING);
  };

  const showModalNewTaskWindow = () => {
    dispatch(SHOW_MODAL_NEW_TASK);
  };

  const searchTasks = (val) => {
    dispatch(setFindingTask(val));
  };

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
          type="text"
          placeholder="Find task..."
          className={styles.search_input}
          onChange={({ target }) => {
            searchTasks(target.value);
          }}
        ></input>
      </form>
    </div>
  );
};
