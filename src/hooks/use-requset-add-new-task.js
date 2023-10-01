export const useRequestAddNewTask = ({
  newTask,
  setIsLoading,
  refreshList,
}) => {
  const requestAddNewTask = () => {
    setIsLoading(true);
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
        refreshList();
      })
      .finally(() => setIsLoading(false));
  };

  return {
    requestAddNewTask,
  };
};
