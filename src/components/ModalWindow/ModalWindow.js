import { useDispatch, useSelector } from "react-redux";
import styles from "./ModalWindow.module.css";
import { showModalNewTask } from "../../store/selectors";
import { SHOW_MODAL_NEW_TASK } from "../../store/actions.js/show-modal-new-task";

export const ModalWindows = () => {
  let newTask = "";

  const dispatch = useDispatch();

  const modalNewTask = useSelector(showModalNewTask);

  const changeModal = () => {
    dispatch(SHOW_MODAL_NEW_TASK);
  };

  return (
    <div
      className={
        modalNewTask ? styles.modal_new_task_window : styles.modal_none
      }
    >
      <div className={styles.modal_box}>
        <div className={styles.modal_btn_wrapper}>
          <button onClick={changeModal}>X</button>
        </div>
        <div className={styles.modal_title}>Describe your task</div>
        <form
          onSubmit={() => {
            changeModal();
          }}
        >
          <textarea
            className={styles.modal_input}
            rows="7"
            cols="33"
            value={newTask}
            onChange={({ target }) => (newTask = target.value)}
          ></textarea>
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
  );
};
