import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { tasksReducer, seterReducer } from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  tasksState: tasksReducer,
  seterState: seterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
