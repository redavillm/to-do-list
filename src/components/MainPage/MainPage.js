import styles from "./MainPage.module.css";
import { useState } from "react";
import { ModalWindows } from "../ModalWindow/ModalWindow";
import { Buttons } from "./Buttons/Buttons";
import { TaskList } from "./TaskList.js/TaskList";

export const MainPage = () => {
  const [visibleModalWindow, setVisibleModalWindow] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  const [findingTask, setFindingTask] = useState("");

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
          findingTask={findingTask}
          showModalNewTaskWindow={showModalNewTaskWindow}
        />
        <TaskList findingTask={findingTask} isSorting={isSorting} />
      </div>

      <ModalWindows
        showModalNewTaskWindow={showModalNewTaskWindow}
        visibleModalkWindow={visibleModalWindow}
      />
    </div>
  );
};
