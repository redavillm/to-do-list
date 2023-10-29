export const useRequestUpdateTask = ({
  id,
  editTask,
  setIsLoading,
  refreshList,
}) => {
  const requestUpdateTask = () => {
    setIsLoading(true);
    fetch(`http://localhost:3005/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
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

  return {
    requestUpdateTask,
  };
};
