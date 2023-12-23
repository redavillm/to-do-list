import { CHANGE_LOADING_IS_FALSE } from "../chang-loading-false";
import { CHANGE_LOADING_IS_TRUE } from "../change-loading-true";
import { CHANGE_REFRESH_LIST_FLAG } from "../change-refresh-flag-list";

export const addNewTask =
  ({ newTask }) =>
  (dispatch) => {
    dispatch(CHANGE_LOADING_IS_TRUE);
    return fetch("http://localhost:3005/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        text: newTask,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log(response);
        dispatch(CHANGE_REFRESH_LIST_FLAG);
      })
      .finally(() => dispatch(CHANGE_LOADING_IS_FALSE));
  };
