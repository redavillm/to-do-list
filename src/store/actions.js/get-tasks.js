export const getTasksFromServer = () => {

  let tasks = fetch("http://localhost:3005/tasks")
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res;
      } else {
        let error = new Error(res.statusText);
        error.response = res;
        throw error;
      }
    })
    .then((res) => res)
    .then((res) => res.json())
    .then((data) => data)
    .finally(() => setIsLoading(false))
    .catch((e) => {
      console.log("Error: " + e.message);
      setIsErroro(!isError);
    });

  return {
    type: "GET_TASKS_FROM_SERVER",
    payload: tasks,
  };
};
