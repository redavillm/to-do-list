import styles from "./EditModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_MODAL } from "../../../store/actions.js/show-edit-modal";
import { selectEditModal } from "../../../store/selectors";
import { updateTask } from "../../../store/actions.js/action-creators/update-task";

export const EditModal = ({ text, id }) => {
  const editModal = useSelector(selectEditModal);
  const dispatch = useDispatch();

  let editTask = "";

  const changeEditModalFlag = () => {
    dispatch(EDIT_MODAL);
  };

  return (
    <div className={editModal ? styles.modal_show : styles.modal_none}>
      <div className={styles.modal_box}>
        <div className={styles.modal_btn_wrapper}>
          <button onClick={changeEditModalFlag}>X</button>
        </div>
        <div className={styles.modal_title}>Describe your new task</div>
        <form
          onSubmit={() => {
            dispatch(updateTask({ id, editTask }));
            changeEditModalFlag();
          }}
        >
          <textarea
            rows="10"
            cols="33"
            className={styles.modal_input}
            onChange={({ target }) => (editTask = target.value)}
          ></textarea>
          <button className={styles.modal_btn} type="submit">
            Edit task
          </button>
        </form>
      </div>
    </div>
  );
};
