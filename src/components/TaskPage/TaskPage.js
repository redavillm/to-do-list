import { fetchTask } from "../../scripts";
import styles from "./TaskPage.module.css";
import { useParams } from "react-router-dom";

export const TaskPage = ({ tasks, isLoading }) => {
  const params = useParams();

  const { title, text } = fetchTask(params.id, tasks);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <div className={styles.task_title}>
            <h5>{title}</h5>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};
