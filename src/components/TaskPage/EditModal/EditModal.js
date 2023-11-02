import styles from "./EditModal.module.css";
import { useState } from "react";
import { useRequestUpdateTask } from "../../../hooks";

export const EditModal = ({ modal, showModal, id, text }) => {
  const [editTask, setEditTask] = useState("");

  const { requestUpdateTask } = useRequestUpdateTask({
    id,
    editTask,
  });
  return (
    <div className={modal ? styles.modal_show : styles.modal_none}>
      <div className={styles.modal_box}>
        <div className={styles.modal_btn_wrapper}>
          <button onClick={showModal}>X</button>
        </div>
        <div className={styles.modal_title}>Describe your new task</div>
        <form onSubmit={() => requestUpdateTask({ id, editTask })}>
          <textarea
            rows="10"
            cols="33"
            className={styles.modal_input}
            value={editTask}
            onChange={({ target }) => setEditTask(target.value)}
          >
            {text}
          </textarea>
          <button
            className={styles.modal_btn}
            type="submit"
            disabled={!editTask}
          >
            Edit task
          </button>
        </form>
      </div>
    </div>
  );
};
