import styles from "./Task.module.css";

export const Task = ({
  id,
  text,
  requestRemoveTask,
  setIsLoading,
  refreshList,
}) => {
  return (
    <div id={id} className={styles.task}>
      {text}
      <div>
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
