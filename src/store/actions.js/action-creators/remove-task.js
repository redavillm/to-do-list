import { CHANGE_LOADING_IS_FALSE } from "../chang-loading-false";
import { CHANGE_LOADING_IS_TRUE } from "../change-loading-true";

export const removeTask =
  ({ id }) =>
  (dispatch) => {
    dispatch(CHANGE_LOADING_IS_TRUE);
    return fetch(`http://localhost:3005/tasks/${id}`, {
      method: "DELETE",
    }).finally(() => dispatch(CHANGE_LOADING_IS_FALSE));
  };
