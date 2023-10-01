import styles from "./ModalWindow.module.css";
import { useRequestAddNewTask } from "../hooks/use-requset-add-new-task";

export const ModalWindows = ({
  showModalNewTaskWindow,
  newTask,
  setIsLoading,
  setNewTask,
  visibleModalkWindow,
  refreshList,
}) => {
  const { requestAddNewTask } = useRequestAddNewTask({
    newTask,
    setIsLoading,
    refreshList,
  });
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
        <form onSubmit={() => requestAddNewTask({ newTask, setIsLoading })}>
          <input
            className={styles.modal_input}
            type="text"
            name="task"
            value={newTask}
            onChange={({ target }) => setNewTask(target.value)}
          ></input>
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
