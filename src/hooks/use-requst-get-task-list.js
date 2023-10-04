import { useEffect, useState } from "react";

export const useRequestGetTasksList = ({ refreshListFlag }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("Приходим к useEffect");

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/tasks")
      .then((loadedData) => loadedData.json())
      .then((loadedTasks) => {
        setTasks(loadedTasks);
        console.log("Делаем запрос к useEffect");
      })
      .finally(() => setIsLoading(false));
  }, [refreshListFlag]);

  console.log("Закончили запрос к useEffect");

  return {
    tasks,
    isLoading,
    setIsLoading,
  };
};
