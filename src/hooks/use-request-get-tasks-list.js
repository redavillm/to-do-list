import { useEffect, useState } from "react";

export const useGetTaskList = ({ refreshListFlag }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/tasks")
      .then((loadedData) => loadedData.json())
      .then((loadedTasks) => {
        setTasks(loadedTasks);
      })
      .finally(() => setIsLoading(false));
  }, [refreshListFlag]);

  return {
    setIsLoading,
    isLoading,
    tasks,
  };
};
