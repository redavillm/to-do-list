import { useContext, useState } from "react";
import styles from "./TaskPage.module.css";
import { useParams } from "react-router-dom";
import { EditModal } from "./EditModal/EditModal";
import { RemModal } from "./RemModal/RemModal";
import { LoadingContext } from "../../context";
import { TaskNotFund } from "./TaskNotFound";
import { useRequestGetTasksList } from "../../hooks";

export const TaskPage = () => {
  const [modal, setModal] = useState(false);
  const [remModal, setRemModal] = useState(false);
  const { isLoading } = useContext(LoadingContext);

  const params = useParams();
  const id = params.id;

  const showModal = () => setModal(!modal);
  const showRemModal = () => setRemModal(!remModal);

  const { tasks } = useRequestGetTasksList();

  const task = tasks.find((task) => task.id === +id);

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
      <EditModal modal={modal} showModal={showModal} id={id} text={text} />
      <RemModal remModal={remModal} showRemModal={showRemModal} id={id} />
    </>
  );
};
