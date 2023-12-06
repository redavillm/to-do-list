const initialSeterState = {
  refreshListFlag: false,
  isLoading: false,
  isError: false,
  editModal: false,
  remModal: false,
  modalNewTask: false,
  isSorting: false,
  findingTask: "",
};

export const seterReducer = (state = initialSeterState, action) => {
  switch (action.type) {
    case "CHANGE_REFRESH_LIST_FLAG":
      return { ...state, refreshListFlag: !state.refreshListFlag };
    case "CHANGE_LOADING_IS_TRUE":
      return { ...state, isLoading: true };
    case "CHANGE_LOADING_IS_FALSE":
      return { ...state, isLoading: false };
    case "CHANGE_IS_ERROR":
      return { ...state, isError: !state.isError };
    case "EDIT_MODAL_FLAG":
      return { ...state, editModal: !state.editModal };
    case "REM_MODAL_FLAG":
      return { ...state, remModal: !state.remModal };
    case "SHOW_MODAL_NEW_TASK":
      return { ...state, newTaskModal: !state.newTaskModal };
    case "CHANGE_IS_SORTING":
      return { ...state, isSorting: !state.isSorting };
    case "FINDING_TASK":
      return { ...state, findingTask: action.payload };
    default:
      return state;
  }
};
