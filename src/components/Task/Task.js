import { useState } from "react";
import styles from "./Task.module.css";
import { useRequestUpdateTask, useRequestRemoveTask } from "../../hooks";
import { Link } from "react-router-dom";

export const Task = ({ id, text, index, setIsLoading, refreshList }) => {
  const [visibleInput, setVisibleInput] = useState(false);
  const [editTask, setEditTask] = useState("");

  const { requestRemoveTask } = useRequestRemoveTask({
    id,
    setIsLoading,
    refreshList,
  });

  const { requestUpdateTask } = useRequestUpdateTask({
    id,
    editTask,
    setIsLoading,
    refreshList,
  });

  const showEditInput = () => {
    setVisibleInput(!visibleInput);
  };

  return (
    <div className={styles.task} id={id}>
      <div className={!visibleInput ? styles.show_task : styles.task_none}>
        <Link to={`:${id}`}>
          {index + 1}. {text}
        </Link>
      </div>
      <form className={visibleInput ? styles.show_input : styles.input_none}>
        <input
          placeholder={text}
          className={styles.editInput}
          value={editTask}
          onChange={({ target }) => setEditTask(target.value)}
        ></input>
      </form>
      <button
        className={styles.edit_btn}
        onClick={() => {
          showEditInput();
          if (visibleInput && editTask !== "") {
            requestUpdateTask({ id, editTask, setIsLoading, refreshList });
          }
        }}
      >
        Edit
      </button>
      <button
        className={styles.del_btn}
        onClick={() => {
          requestRemoveTask({ id, setIsLoading, refreshList });
        }}
      >
        X
      </button>
    </div>
  );
};
