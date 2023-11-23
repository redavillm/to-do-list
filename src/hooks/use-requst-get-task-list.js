import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_IS_LOADING } from "../store/actions.js/change-is-loading";
import { CHANGE_IS_ERROR } from "../store/actions.js/change-is-error";
import { selectRefreshListFlag } from "../store/selectors/select-refresh-list-flag";

export const useRequestGetTasksList = () => {
  const dispatch = useDispatch();

  const refreshListFlag = useSelector(selectRefreshListFlag);

  useEffect(() => {
    dispatch(CHANGE_IS_LOADING);
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
      .then((data) => data)
      .finally(() => dispatch(CHANGE_IS_LOADING))
      .catch((e) => {
        console.log("Error: " + e.message);
        dispatch(CHANGE_IS_ERROR);
      });
  }, [refreshListFlag]);
};
