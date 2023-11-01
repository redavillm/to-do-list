import { useState } from "react";
import { useRequestGetTasksList } from "../../hooks";
import { fetchTask } from "../../scripts";
import styles from "./TaskPage.module.css";
import { useParams } from "react-router-dom";
import { EditModal } from "./EditModal/EditModal";
import { RemModal } from "./RemModal/RemModal";

const TaskNotFund = () => {
  return <div>/ This task doesn`t exist. /</div>;
};

export const TaskPage = ({ refreshListFlag, refreshList }) => {
  const [modal, setModal] = useState(false);
  const [remModal, setRemModal] = useState(false);

  const showModal = () => setModal(!modal);

  const params = useParams();

  const id = params.id;

  const showRemModal = () => setRemModal(!remModal);
  const { tasks, isLoading, setIsLoading } = useRequestGetTasksList({
    refreshListFlag,
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
      <EditModal
        modal={modal}
        showModal={showModal}
        id={id}
        text={text}
        setIsLoading={setIsLoading}
        refreshList={refreshList}
      />

      <RemModal
        remModal={remModal}
        showRemModal={showRemModal}
        id={id}
        setIsLoading={setIsLoading}
        refreshList={refreshList}
      />
    </>
  );
};
