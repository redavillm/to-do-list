import { CHANGE_REFRESH_LIST_FLAG } from "../change-refresh-flag-list";

export const removeTask = ({ id }) => {
  return (dispatch) => {
    fetch(`http://localhost:3005/tasks/${id}`, {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then(() => {
        dispatch(CHANGE_REFRESH_LIST_FLAG);
      });
  };
};
