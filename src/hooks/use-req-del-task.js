import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useDeleteTask = ({ id, setIsLoading }) => {
  const requestRemoveTask = () => {
    setIsLoading(true);

    const taskDbRef = ref(db, `tasks/${id}`);

    remove(taskDbRef)
      .then((response) => {
        console.log(response);
      })
      .finally(() => setIsLoading(false));
  };
  return requestRemoveTask;
};
