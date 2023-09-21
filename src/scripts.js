import { Task } from "./components/Task/Task";

export const createTasksList = ({ tasks, setIsLoading }) => {
  return Object.entries(tasks).map(([id, { text }], index) => (
    <div>
      <Task id={id} text={text} index={index} setIsLoading={setIsLoading} />
    </div>
  ));
};

export const findTasksList = ({ findingTask, tasks, setIsLoading }) => {
  return Object.entries(tasks)
    .filter((task) => task.text.includes(findingTask))
    .map(({ id, text }, index) => (
      <div>
        <Task id={id} text={text} index={index} setIsLoading={setIsLoading} />
      </div>
    ));
};

export const sortTasksList = ({ tasks, setIsLoading }) => {
  return Object.entries(tasks)
    .sort(function (a, b) {
      let x = a.text ? a.text.toLowerCase() : "";
      let y = b.text ? b.text.toLowerCase() : "";
      return x < y ? -1 : x > y ? 1 : 0;
    })
    .map(({ id, text }, index) => (
      <div>
        <Task id={id} text={text} index={index} setIsLoading={setIsLoading} />
      </div>
    ));
};
