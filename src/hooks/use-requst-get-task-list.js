import { useEffect, useState } from "react";

export const useRequestGetTasksList = ({ refreshListFlag }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/tasks")
      .then((data) => data.json())
      .then((tasks) => {
        setTasks(tasks);
      })
      .finally(() => setIsLoading(false));
  }, [refreshListFlag]);

  return {
    tasks,
    isLoading,
    setIsLoading,
  };
};
