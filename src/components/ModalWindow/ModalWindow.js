import styles from "./ModalWindow.module.css";
import { useRequestAddNewTask } from "../../hooks/use-requset-add-new-task";
import { useState } from "react";

export const ModalWindows = ({
  showModalNewTaskWindow,
  visibleModalkWindow,
}) => {
  const [newTask, setNewTask] = useState("");
  const { requestAddNewTask } = useRequestAddNewTask(newTask);

  return (
    <div
      className={
        visibleModalkWindow ? styles.modal_new_task_window : styles.modal_none
      }
    >
      <div className={styles.modal_box}>
        <div className={styles.modal_btn_wrapper}>
          <button onClick={showModalNewTaskWindow}>X</button>
        </div>
        <div className={styles.modal_title}>Describe your task</div>
        <form
          onSubmit={() => {
            showModalNewTaskWindow();
            requestAddNewTask();
          }}
        >
          <textarea
            className={styles.modal_input}
            rows="7"
            cols="33"
            value={newTask}
            onChange={({ target }) => setNewTask(target.value)}
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
