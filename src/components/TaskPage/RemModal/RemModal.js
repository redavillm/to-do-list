import { Link } from "react-router-dom";
import styles from "./RemModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRemModal } from "../../../store/selectors";
import { REM_MODAL } from "../../../store/actions.js/show-rem-modal";

export const RemModal = ({ id }) => {
  const dispatch = useDispatch();

  const remModal = useSelector(selectRemModal);

  const showRemModal = () => {
    dispatch(REM_MODAL);
  };

  return (
    <div className={remModal ? styles.modal_show : styles.modal_none}>
      <div className={styles.modal_rem_box}>
        <div className={styles.modal_btn_wrapper}>
          <button onClick={showRemModal}>X</button>
        </div>
        <div className={styles.modal_title}>Are you sure?</div>
        <div className={styles.rem_btn}>
          <Link to="/">
            <button className={styles.modal_btn} onClick={() => {}}>
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
