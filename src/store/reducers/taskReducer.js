const initialTasksState = {};

export const tasksReducer = (state = initialTasksState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "GET_TASKS":
      return payload;
    default:
      return state;
  }
};
