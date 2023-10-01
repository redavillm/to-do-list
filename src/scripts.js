export const requestAddNewTask = ({ newTask, setIsLoading }) => {
  setIsLoading(true);
  return fetch("http://localhost:3005/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      text: newTask,
    }),
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => console.log(response))
    .finally(() => setIsLoading(false));
};

export const requestUpdateTask = ({
  id,
  editTask,
  setIsLoading,
  refreshList,
}) => {
  setIsLoading(true);
  fetch(`http://localhost:3005/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      id: id,
      text: editTask,
    }),
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      console.log(response);
      refreshList();
    })
    .finally(() => setIsLoading(false));
};

export const requestRemoveTask = ({ id, setIsLoading, refreshList }) => {
  setIsLoading(true);
  fetch(`http://localhost:3005/tasks/${id}`, {
    method: "DELETE",
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      console.log(response);
      refreshList();
    })
    .finally(() => setIsLoading(false));
};
