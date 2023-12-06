import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";
import { NotFund } from "./components/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { selectIsError } from "./store/selectors";
import { getTasksFromServer } from "./store/actions.js/action-creators/get-tasks";
import { useEffect } from "react";
import { CHANGE_REFRESH_LIST_FLAG } from "./store/actions.js/change-refresh-flag-list";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("test");
    dispatch(getTasksFromServer());
    dispatch(CHANGE_REFRESH_LIST_FLAG);
  }, [dispatch]);
  const isError = useSelector(selectIsError);

  return (
    <div className={styles.app}>
      <a href="/">
        <h1>Tasks list</h1>
      </a>
      <div>
        {isError ? (
          <>Oops... sorry, something wrong, try again later =(</>
        ) : (
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="*" element={<NotFund />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
