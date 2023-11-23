const initialTasksState = {};

export const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case "SOME_TYPE":
      return true;
    default:
      return state;
  }
};
