import styles from "./EditModalWindow.module.css";
import { requestUpdateTask } from "../scripts";

export const EditModalWindow = ({
  showModalEditTaskWindow,
  editTask,
  setIsLoading,
  setEditTask,
  visibleModalEditWindow,
  refreshList,
}) => {
  return (
    <div
      className={
        visibleModalEditWindow
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
            requestUpdateTask({ editTask, setIsLoading, refreshList })
          }
        >
          <input
            className={styles.modal_input}
            placeholder="Tasks number"
            value={editTask.id}
            onChange={({ target }) => {
              setEditTask(...editTask, {
                id: target.value,
              });
            }}
          ></input>
          <input
            placeholder="New tasks text"
            className={styles.modal_input}
            name="task"
            value={editTask.text}
            onChange={({ target }) =>
              setEditTask(...editTask, {
                text: target.value,
              })
            }
          ></input>
          <button
            className={styles.modal_btn}
            type="submit"
            disabled={editTask.text === "" || (editTask.id = 0)}
          >
            Add task
          </button>
        </form>
      </div>
    </div>
  );
};
