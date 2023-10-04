import { Task } from "./components/Task/Task";

export const createTasksList = ({ tasks, setIsLoading, refreshList }) => {
  return tasks.map(({ id, title }, index) => (
    <div>
      <Task
        id={id}
        title={title}
        index={index}
        setIsLoading={setIsLoading}
        refreshList={refreshList}
      />
    </div>
  ));
};

export const findTasksList = ({
  findingTask,
  tasks,
  setIsLoading,
  refreshList,
}) => {
  return tasks
    .filter((task) => task.title.includes(findingTask))
    .map(({ id, title }, index) => (
      <div>
        <Task
          id={id}
          title={title}
          index={index}
          setIsLoading={setIsLoading}
          refreshList={refreshList}
        />
      </div>
    ));
};

export const sortListTasks = ({ tasks, setIsLoading, refreshList }) => {
  const arr = tasks;
  return arr
    .sort(function (a, b) {
      let x = a.title ? a.title.toLowerCase() : "";
      let y = b.title ? b.title.toLowerCase() : "";
      return x < y ? -1 : x > y ? 1 : 0;
    })
    .map(({ id, title }, index) => (
      <div>
        <Task
          id={id}
          title={title}
          index={index}
          setIsLoading={setIsLoading}
          refreshList={refreshList}
        />
      </div>
    ));
};

export const fetchTask = (id, tasks) => {
  return tasks.find((el) => el.id === id);
};
