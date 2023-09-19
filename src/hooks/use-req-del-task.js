export const useDeleteTask = ({ id, setIsLoading, refreshList }) => {
  const requestRemoveTask = () => {
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
  return requestRemoveTask;
};
