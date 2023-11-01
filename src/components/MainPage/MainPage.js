import styles from "./MainPage.module.css";
import { useState } from "react";
import { ModalWindows } from "../ModalWindow/ModalWindow";
import { useRequestGetTasksList } from "../../hooks";
import { Buttons } from "./Buttons/Buttons";
import { TaskList } from "./TaskList.js/TaskList";

export const MainPage = ({ refreshListFlag, refreshList }) => {
  const [visibleModalWindow, setVisibleModalWindow] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  const [findingTask, setFindingTask] = useState("");

  const { tasks, isLoading, setIsLoading } = useRequestGetTasksList({
    refreshListFlag,
  });

  const showModalNewTaskWindow = () =>
    setVisibleModalWindow(!visibleModalWindow);

  const setSorting = () => {
    setIsSorting(!isSorting);
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <Buttons
          setFindingTask={setFindingTask}
          setSorting={setSorting}
          refreshList={refreshList}
          findingTask={findingTask}
          showModalNewTaskWindow={showModalNewTaskWindow}
        />
        <TaskList
          isLoading={isLoading}
          findingTask={findingTask}
          tasks={tasks}
          setIsLoading={setIsLoading}
          refreshList={refreshList}
          isSorting={isSorting}
        />
      </div>

      <ModalWindows
        showModalNewTaskWindow={showModalNewTaskWindow}
        setIsLoading={setIsLoading}
        visibleModalkWindow={visibleModalWindow}
        refreshList={refreshList}
      />
    </div>
  );
};
