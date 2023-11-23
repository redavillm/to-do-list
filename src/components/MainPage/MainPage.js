import styles from "./MainPage.module.css";
import { ModalWindows } from "../ModalWindow/ModalWindow";
import { Buttons } from "./Buttons/Buttons";
import { TaskList } from "./TaskList.js/TaskList";

export const MainPage = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Buttons />
        <TaskList />
      </div>
      <ModalWindows />
    </div>
  );
};
