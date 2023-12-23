import { CHANGE_LOADING_IS_FALSE } from "../chang-loading-false";
import { CHANGE_LOADING_IS_TRUE } from "../change-loading-true";

export const updateTask =
  ({ id, editTask }) =>
  (dispatch) => {
    dispatch(CHANGE_LOADING_IS_TRUE);
    return fetch(`http://localhost:3005/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        text: editTask,
      }),
    }).finally(() => dispatch(CHANGE_LOADING_IS_FALSE));
  };
