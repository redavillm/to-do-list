import { CHANGE_IS_LOADING } from "../change-is-loading";
import { CHANGE_REFRESH_LIST_FLAG } from "../change-refresh-flag-list";

export const addNewTask =
  ({ newTask }) =>
  (dispatch) => {
    dispatch(CHANGE_IS_LOADING);
    fetch("http://localhost:3005/tasks", {
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
      .finally(() => dispatch(CHANGE_IS_LOADING));
  };
