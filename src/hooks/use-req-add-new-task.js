export const useAddNewTask = ({ newTask, setIsLoading }) => {
  const requestAddNewTask = () => {
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
  return requestAddNewTask;
};
