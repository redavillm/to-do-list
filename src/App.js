import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { TaskPage } from "./components/TaskPage/TaskPage";
import { NotFund } from "./components/NotFound";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import { selectIsError } from "./store/selectors";

function App() {
  const isError = useSelector(selectIsError);

  return (
    <Provider store={store}>
      <div className={styles.app}>
        <a href="/">
          <h1>Tasks list</h1>
        </a>
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
    </Provider>
  );
}

export default App;
