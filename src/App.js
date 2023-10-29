import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";
import { useState } from "react";

const NotFund = () => {
  return <div href="/404">/ 404 Not Found /</div>;
};

function App() {
  const [refreshListFlag, setRefreshListFlag] = useState(false);

  const refreshList = () => setRefreshListFlag(!refreshListFlag);
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
              refreshList={refreshList}
              refreshListFlag={refreshListFlag}
            />
          }
        />
        <Route
          path="/task/:id"
          element={
            <TaskPage
              refreshList={refreshList}
              refreshListFlag={refreshListFlag}
            />
          }
        />
        <Route path="*" element={<NotFund />} />
      </Routes>
    </div>
  );
}

export default App;
