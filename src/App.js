import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";

const NotFund = () => {
  return <div href="/404">/ 404 Not Found /</div>;
};

function App() {
  return (
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
  );
}

export default App;
