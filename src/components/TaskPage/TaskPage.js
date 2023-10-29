import { useState } from "react";
import {
  useRequestGetTasksList,
  useRequestRemoveTask,
  useRequestUpdateTask,
} from "../../hooks";
import { fetchTask } from "../../scripts";
import styles from "./TaskPage.module.css";
import { Link, useParams } from "react-router-dom";

const TaskNotFund = () => {
  return <div>/ This task doesn`t exist. /</div>;
};

export const TaskPage = ({ refreshListFlag, refreshList }) => {
  const [modal, setModal] = useState(false);
  const [remModal, setRemModal] = useState(false);
  const [editTask, setEditTask] = useState("");

  const params = useParams();

  const id = params.id;

  const showModal = () => setModal(!modal);
  const showRemModal = () => setRemModal(!remModal);

  const { tasks, isLoading, setIsLoading } = useRequestGetTasksList({
    refreshListFlag,
  });

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

  const task = fetchTask(id, tasks);

  if (!task) {
    return <TaskNotFund />;
  }

  const { text } = task;

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          <>
            <div className={styles.task_title}>
              <button onClick={showModal}>Edit</button>
              <button onClick={showRemModal}>Delete</button>
            </div>
            <p>{text}</p>
          </>
        )}
      </div>
      <div className={modal ? styles.modal_show : styles.modal_none}>
        <div className={styles.modal_box}>
          <div className={styles.modal_btn_wrapper}>
            <button onClick={showModal}>X</button>
          </div>
          <div className={styles.modal_title}>Describe your task</div>
          <form
            onSubmit={() =>
              requestUpdateTask({ id, editTask, setIsLoading, refreshList })
            }
          >
            <textarea
              rows="7"
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
      <div className={remModal ? styles.modal_show : styles.modal_none}>
        <div className={styles.modal_rem_box}>
          <div className={styles.modal_btn_wrapper}>
            <button onClick={showRemModal}>X</button>
          </div>
          <div className={styles.modal_title}>Are you sure?</div>
          <div className={styles.rem_btn}>
            <Link to="/">
              <button
                className={styles.modal_btn}
                onClick={() => {
                  console.log("onSubmit==>>", id);
                  requestRemoveTask({ id, setIsLoading, refreshList });
                }}
              >
                Yes
              </button>
            </Link>
            <button className={styles.modal_btn} onClick={showRemModal}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
