import { useState } from "react";
import { useRequestGetTasksList, useRequestUpdateTask } from "../../hooks";
import { fetchTask } from "../../scripts";
import styles from "./TaskPage.module.css";
import { useParams } from "react-router-dom";

const TaskNotFund = () => {
  return <div>/ This task doesn`t exist. /</div>;
};

export const TaskPage = ({ setIsLoading, refreshListFlag, refreshList }) => {
  const [modal, setModal] = useState(false);
  const [editTask, setEditTask] = useState({
    title: "",
    text: "",
  });

  const params = useParams();

  const id = params.id;

  const showModal = () => setModal(!modal);

  const { tasks, isLoading } = useRequestGetTasksList({
    refreshListFlag,
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

  const { title, text } = task;

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          <>
            <div className={styles.task_title}>
              <h5>{title}</h5>
              <div>
                <button onClick={showModal}>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <p>{text}</p>
          </>
        )}
      </div>
      <div
        className={modal ? styles.modal_edit_task_window : styles.modal_none}
      >
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
            <input
              className={styles.modal_input}
              type="title"
              name="task"
              value={editTask.title}
              onChange={({ target }) =>
                setEditTask({
                  ...editTask,
                  title: `${target.value}`,
                  text: editTask.text,
                })
              }
            ></input>
            <input
              className={styles.modal_input}
              type="text"
              name="task"
              value={editTask.text}
              s
              onChange={({ target }) =>
                setEditTask({
                  ...editTask,
                  title: editTask.title,
                  text: `${target.value}`,
                })
              }
            ></input>
            <button
              className={styles.modal_btn}
              type="submit"
              disabled={!editTask.title || !editTask.text}
            >
              Add task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
