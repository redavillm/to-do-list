import { CHANGE_IS_LOADING } from "../change-is-loading";
import { CHANGE_REFRESH_LIST_FLAG } from "../change-refresh-flag-list";

export const updateTask = ({ id, editTask }) => {
  return (dispatch) => {
    dispatch(CHANGE_IS_LOADING);
    fetch(`http://localhost:3005/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        text: editTask,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        dispatch(CHANGE_REFRESH_LIST_FLAG);
      })
      .finally(() => dispatch(CHANGE_IS_LOADING));
  };
};
