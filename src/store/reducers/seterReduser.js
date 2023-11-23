const initialSeterState = {
  refreshListFlag: false,
  isLoading: false,
  isError: false,
  editModal: false,
  remModal: false,
  newTaskModal: false,
  isSorting: false,
  findingTask: "",
};

export const seterReducer = (state = initialSeterState, action) => {
  switch (action.type) {
    case "CHANGE_REFRESH_LIST_FLAG":
      return { ...state, refreshListFlag: !state.refreshListFlag };
    case "CHANGE_IS_LOADING":
      return { ...state, isLoading: !state.isLoading };
    case "CHANGE_IS_ERROR":
      return { ...state, isError: !state.isError };
    case "EDIT_MODAL_FLAG":
      return { ...state, editModal: !state.editModal };
    case "REM_MODAL_FLAG":
      return { ...state, remModal: !state.remModal };
    case "NEW_TASK_MODAL_FLAG":
      return { ...state, newTaskModal: !state.newTaskModal };
    case "CHANGE_IS_SORTING":
      return { ...state, isSorting: !state.isSorting };
    case "FINDING_TASK":
      return { ...state, findingTask: action.payload };
    default:
      return state;
  }
};
