import { useContext, useEffect, useState } from "react";
import { ErrorContext, LoadingContext, RefreshContext } from "../context";

export const useRequestGetTasksList = () => {
  const { refreshListFlag } = useContext(RefreshContext);
  const { isError, setIsErroro } = useContext(ErrorContext);
  const [tasks, setTasks] = useState([]);
  const { setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3005/tasks")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then((res) => {
        return res;
      })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      })
      .finally(() => setIsLoading(false))
      .catch((e) => {
        console.log("Error: " + e.message);
        setIsErroro(!isError);
      });
  }, [refreshListFlag]);

  return { tasks, isError };
};
