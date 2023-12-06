const initialTasksState = [];

export const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case "GET_TASKS_FROM_SERVER":
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
