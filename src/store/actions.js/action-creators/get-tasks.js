import { CHANGE_IS_ERROR } from "../change-is-error";
import { CHANGE_LOADING_IS_TRUE } from "../change-loading-true";
import { CHANGE_LOADING_IS_FALSE } from "../chang-loading-false";

export const getTasksFromServer = () => (dispatch) => {
  dispatch(CHANGE_LOADING_IS_TRUE);

  fetch("http://localhost:3005/tasks")
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
    })
    .then((data) => {
      dispatch({
        type: "GET_TASKS_FROM_SERVER",
        payload: data,
      });
    })
    .finally(() => dispatch(CHANGE_LOADING_IS_FALSE))
    .catch((e) => {
      console.log("Error: " + e.message);
      dispatch(CHANGE_IS_ERROR);
    });
};
