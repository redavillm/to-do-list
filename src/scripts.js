import { Task } from "./components/Task";

export const createTasksList = ({ tasks, setIsLoading, refreshList }) => {
  return (
    tasks
      // .sort(function (a, b) {
      //   return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      // })
      .map(({ id, text }, index) => (
        <div>
          <Task
            id={id}
            text={text}
            index={index}
            setIsLoading={setIsLoading}
            refreshList={refreshList}
          />
        </div>
      ))
  );
};

export const findTasksList = ({ string, tasks, setIsLoading, refreshList }) => {
  return tasks
    .filter((task) => task.text.includes(string))
    .map(({ id, text }, index) => (
      <div>
        <Task
          id={id}
          text={text}
          index={index}
          setIsLoading={setIsLoading}
          refreshList={refreshList}
        />
      </div>
    ));
};

export const sortListTasks = ({ tasks, setIsLoading, refreshList }) => {
  return tasks
    .sort(function (a, b) {
      let x = a.text ? a.text.toLowerCase() : "";
      let y = b.text ? b.text.toLowerCase() : "";
      return x < y ? -1 : x > y ? 1 : 0;
    })
    .map(({ id, text }, index) => (
      <div>
        <Task
          id={id}
          text={text}
          index={index}
          setIsLoading={setIsLoading}
          refreshList={refreshList}
        />
      </div>
    ));
};
