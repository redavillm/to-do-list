import styles from "./EditModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setEditTask } from "../../../store/actions.js/action-creators/set-edit-task";
import { EDIT_MODAL } from "../../../store/actions.js/show-edit-modal";
import { selectEditModal } from "../../../store/selectors";

export const EditModal = ({ text }) => {
  const editModal = useSelector(selectEditModal);
  const dispatch = useDispatch();

  let editedText = "";

  const editTask = (value) => {
    dispatch(setEditTask(value));
  };

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
        <form onSubmit={() => editTask(editedText)}>
          <textarea
            rows="10"
            cols="33"
            className={styles.modal_input}
            value={editedText}
            onChange={({ target }) => (editedText = target.value)}
          >
            {text}
          </textarea>
          <button
            className={styles.modal_btn}
            type="submit"
            disabled={!editedText}
          >
            Edit task
          </button>
        </form>
      </div>
    </div>
  );
};
