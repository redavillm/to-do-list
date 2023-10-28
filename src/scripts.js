import { Task } from "./components/Task/Task";

export const createTasksList = ({ tasks }) => {
  return tasks.map(({ id, text }, index) => (
    <div>
      <Task id={id} text={text} index={index} />
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
    .filter((task) => task.text.includes(findingTask))
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

export const sortListTasks = ({
  tasks,
  setIsLoading,
  refreshList,
  isSorting,
}) => {
  const arr = tasks;
  return arr
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
          isSorting={isSorting}
        />
      </div>
    ));
};

export const fetchTask = (id, tasks) => {
  return tasks.find((task) => task.id === +id);
};
