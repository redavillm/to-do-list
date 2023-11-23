import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasksReducer, seterReducer } from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  tasksState: tasksReducer,
  seterState: seterReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
