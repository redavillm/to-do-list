import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";
import { useRequestGetTasksList } from "./hooks";
import { useState } from "react";

function App() {
  const [refreshListFlag, setRefreshListFlag] = useState(false);

  const refreshList = () => setRefreshListFlag(!refreshListFlag);

  const { tasks, isLoading, setIsLoading } = useRequestGetTasksList({
    refreshListFlag,
  });

  return (
    <div className={styles.app}>
      <a href="/">
        <h1>Tasks list</h1>
      </a>

      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              tasks={tasks}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              refreshList={refreshList}
            />
          }
        />
        <Route
          path="/:id"
          element={<TaskPage tasks={tasks} isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
