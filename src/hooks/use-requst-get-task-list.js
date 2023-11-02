import { useContext, useEffect, useState } from "react";
import { LoadingContext, RefreshContext } from "../context";

export const useRequestGetTasksList = () => {
  const { refreshListFlag } = useContext(RefreshContext);
  const [tasks, setTasks] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  console.log("IsLoading - ", isLoading);
  console.log("typeof setIsLoading -", typeof setIsLoading);
  console.log("tasks - ", tasks);

  useEffect(() => {
    setIsLoading(true);
    console.log("IsLoading in useEffect - ", isLoading);
    fetch("http://localhost:3005/tasks")
      .then((data) => data.json())
      .then((tasks) => {
        console.log(tasks);
        setTasks(tasks);
      })
      .finally(() => setIsLoading(false));
  }, [refreshListFlag]);

  return tasks;
};
