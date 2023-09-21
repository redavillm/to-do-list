import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useUpdateTask = ({ id, editTask, setIsLoading }) => {
  const requestUpdateTask = () => {
    setIsLoading(true);
    const taskDbRef = ref(db, `tasks/${id}`);
    set(taskDbRef, {
      text: editTask,
    })
      .then((response) => {
        console.log(response);
      })
      .finally(() => setIsLoading(false));
  };

  return requestUpdateTask;
};