import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";

function App() {
  return (
    <div className={styles.app}>
      <h1>Tasks list</h1>
      <MainPage />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path=":id" element={<TaskPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
