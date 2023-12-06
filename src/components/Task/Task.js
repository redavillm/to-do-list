import { useSelector } from "react-redux";
import styles from "./Task.module.css";
import { Link } from "react-router-dom";
import { selectIsSorting } from "../../store/selectors";

export const Task = ({ id, text, index }) => {
  const isSorting = useSelector(selectIsSorting);
  return (
    <div className={styles.task} id={id}>
      <div className={styles.show_task}>
        <Link to={`/task/${id}`}>
          {!isSorting ? index + 1 + ". " : ""}
          {text}
        </Link>
      </div>
    </div>
  );
};
