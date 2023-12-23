import styles from "./TaskPage.module.css";
import { useParams } from "react-router-dom";
import { EditModal } from "./EditModal/EditModal";
import { RemModal } from "./RemModal/RemModal";
import { TaskNotFund } from "./TaskNotFound";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_MODAL } from "../../store/actions.js/show-edit-modal";
import { REM_MODAL } from "../../store/actions.js/show-rem-modal";
import { selectIsLoading, selectTasks } from "../../store/selectors";

export const TaskPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const tasks = useSelector(selectTasks);

  const params = useParams();
  const id = params.id;

  const task = tasks?.find((task) => task.id === +id);

  if (!task) {
    return <TaskNotFund />;
  }

  const { text } = task;

  const showEditModal = () => {
    dispatch(EDIT_MODAL);
  };
  const showRemModal = () => {
    dispatch(REM_MODAL);
  };

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          <>
            <div className={styles.task_title}>
              <button onClick={showEditModal}>Edit</button>
              <button onClick={showRemModal}>Delete</button>
            </div>
            <p>{text}</p>
          </>
        )}
      </div>
      <EditModal text={text} id={id} />
      <RemModal id={id} />
    </>
  );
};
