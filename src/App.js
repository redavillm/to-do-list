import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";
import { useState } from "react";
import { ErrorContext, LoadingContext, RefreshContext } from "./context";
import { NotFund } from "./components/NotFound";

function App() {
  const [refreshListFlag, setRefreshListFlag] = useState(false);
  const refreshList = () => setRefreshListFlag(!refreshListFlag);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErroro] = useState(false);

  return (
    <RefreshContext.Provider value={{ refreshListFlag, refreshList }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <ErrorContext.Provider value={{ isError, setIsErroro }}>
          <div className={styles.app}>
            <a href="/">
              <h1>Tasks list</h1>
            </a>
            {isError ? (
              <>Sorry, something wrong, try again later =(</>
            ) : (
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/task/:id" element={<TaskPage />} />
                <Route path="*" element={<NotFund />} />
              </Routes>
            )}
          </div>
        </ErrorContext.Provider>
      </LoadingContext.Provider>
    </RefreshContext.Provider>
  );
}

export default App;
