import { useContext, useEffect, useState } from "react";
import { LoadingContext, RefreshContext } from "../context";

export const useRequestGetTasksList = () => {
  const { refreshListFlag } = useContext(RefreshContext);
  const [tasks, setTasks] = useState([]);
  const { setIsLoading } = useContext(LoadingContext);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/tasks")
      .then((data) => data.json())
      .then((tasks) => {
        setTasks(tasks);
      })
      .finally(() => setIsLoading(false));
  }, [refreshListFlag]);

  return { tasks };
};
