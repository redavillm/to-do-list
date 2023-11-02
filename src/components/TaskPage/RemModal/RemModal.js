import { Link } from "react-router-dom";
import styles from "./RemModal.module.css";
import { useRequestRemoveTask } from "../../../hooks";

export const RemModal = ({ remModal, showRemModal, id }) => {
  const { requestRemoveTask } = useRequestRemoveTask(id);

  return (
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
                requestRemoveTask(id);
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
  );
};
