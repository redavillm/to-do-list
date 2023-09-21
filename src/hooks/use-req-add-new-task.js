import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useAddNewTask = ({ newTask, setIsLoading }) => {
  const requestAddNewTask = () => {
    setIsLoading(true);

    const tasksDbRef = ref(db, "tasks");

    push(tasksDbRef, {
      text: newTask,
    })
      .then((response) => console.log(response))
      .finally(() => setIsLoading(false));
  };
  return requestAddNewTask;
};
