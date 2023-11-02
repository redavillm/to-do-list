import { useContext } from "react";
import { LoadingContext, RefreshContext } from "../context";

export const useRequestAddNewTask = ({ newTask }) => {
  const { refreshList } = useContext(RefreshContext);
  const { setIsLoading } = useContext(LoadingContext);
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
