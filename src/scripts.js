import { Task } from "./components/Task/Task";

export const createTasksList = ({ tasks, setIsLoading, refreshList }) => {
  return tasks.map(({ id, text }, index) => (
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

export const findTasksList = ({ findingTask, tasks, setIsLoading, refreshList }) => {
    console.log(findingTask)
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

export const sortTasksList = ({ tasks, setIsLoading, refreshList }) => {
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
