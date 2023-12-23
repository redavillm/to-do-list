import { useDispatch, useSelector } from "react-redux";
import styles from "./ModalWindow.module.css";
import { SHOW_MODAL_NEW_TASK } from "../../store/actions.js/show-modal-new-task";
import { selectNewTaskModal } from "../../store/selectors";
import { addNewTask } from "../../store/actions.js/action-creators/add-new-task";

export const ModalWindows = () => {
  let newTask = "";

  const dispatch = useDispatch();

  const newTaskModal = useSelector(selectNewTaskModal);

  const changeModal = () => {
    dispatch(SHOW_MODAL_NEW_TASK);
  };

  return (
    <div
      className={
        newTaskModal ? styles.modal_new_task_window : styles.modal_none
      }
    >
      <div className={styles.modal_box}>
        <div className={styles.modal_btn_wrapper}>
          <button onClick={changeModal}>X</button>
        </div>
        <div className={styles.modal_title}>Describe your task</div>
        <form
          onSubmit={() => {
            dispatch(addNewTask({ newTask }));
            changeModal();
          }}
        >
          <textarea
            className={styles.modal_input}
            rows="10"
            cols="33"
            onChange={({ target }) => (newTask = target.value)}
          ></textarea>
          <button className={styles.modal_btn} type="submit">
            Add task
          </button>
        </form>
      </div>
    </div>
  );
};
