import { useState } from "react";
import styles from "./Task.module.css";

export const Task = ({
  id,
  text,
  index,
  requestRemoveTask,
  setIsLoading,
  refreshList,
}) => {
  const [visibleInput, setVisibleInput] = useState(false);
  const showEditInput = () => {
    setVisibleInput(!visibleInput);
  };

  return (
    <div className={styles.task} id={id}>
      <div className={!visibleInput ? styles.show_task : styles.task_none}>
        {index + 1}. {text}
      </div>
      <div className={visibleInput ? styles.show_input : styles.input_none}>
        <input placeholder={text} className={styles.editInput}></input>
      </div>
      <div>
        <button className={styles.del_btn} onClick={showEditInput}>
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
    </div>
  );
};
