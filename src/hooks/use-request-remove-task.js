import { useContext } from "react";
import { LoadingContext, RefreshContext } from "../context";

export const useRequestRemoveTask = ({ id }) => {
  const { refreshList } = useContext(RefreshContext);
  const { setIsLoading } = useContext(LoadingContext);
  const requestRemoveTask = () => {
    setIsLoading(true);
    fetch(`http://localhost:3005/tasks/${id}`, {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log(response);
        refreshList();
      })
      .finally(() => setIsLoading(false));
  };
  return {
    requestRemoveTask,
  };
};
