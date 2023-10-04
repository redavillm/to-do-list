export const useRequestUpdateTask = ({
  id,
  editTask,
  setIsLoading,
  refreshList,
}) => {
  const requestUpdateTask = () => {
    setIsLoading(true);
    fetch(`http://localhost:3005/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: id,
        title: editTask,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log(response);
        refreshList();
      })
      .finally(() => setIsLoading(false));
  };

  return {
    requestUpdateTask,
  };
};
