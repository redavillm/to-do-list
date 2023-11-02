import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";
import { useState } from "react";
import { LoadingContext, RefreshContext } from "./context";
import { NotFund } from "./components/NotFound";

function App() {
  const [refreshListFlag, setRefreshListFlag] = useState(false);
  const refreshList = () => setRefreshListFlag(!refreshListFlag);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <RefreshContext.Provider value={{ refreshListFlag, refreshList }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <div className={styles.app}>
          <a href="/">
            <h1>Tasks list</h1>
          </a>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="*" element={<NotFund />} />
          </Routes>
        </div>
      </LoadingContext.Provider>
    </RefreshContext.Provider>
  );
}

export default App;
