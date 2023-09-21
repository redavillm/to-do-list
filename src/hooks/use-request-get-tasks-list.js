import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useGetTaskList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const tasksDbRef = ref(db, "tasks");

    return onValue(tasksDbRef, (snapshot) => {
      const loadedTasks = snapshot.val() || {};

      setTasks(loadedTasks);
      setIsLoading(false);
    });
  }, []);

  return {
    setIsLoading,
    isLoading,
    tasks,
  };
};
