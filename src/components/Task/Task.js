import styles from "./Task.module.css";
import { Link } from "react-router-dom";

export const Task = ({ id, title, index }) => {
  return (
    <div className={styles.task} id={id}>
      <div className={styles.show_task}>
        <Link to={`/task/${id}`}>
          {index + 1}. {title}
        </Link>
      </div>
    </div>
  );
};
