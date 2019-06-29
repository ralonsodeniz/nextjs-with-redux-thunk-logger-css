import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  updateClockReducer,
  updateCounterReducer,
  updateUsersReducer
} from "./reducers";
import { createLogger } from "redux-logger"; // this is the middleware for loggin
import thunkMiddleware from "redux-thunk"; // this is the middleware for async actions in redux

const logger = createLogger();
const combinedStore = combineReducers({
  updateClockReducer,
  updateCounterReducer,
  updateUsersReducer
});

export function initializeStore(initialState) {
  // initialState is a preloaded state the store has when the app is loaded. In this case it's gonna be preleaded with the actions dispatched in getInitialProps in the index.js
  return createStore(
    combinedStore,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  );
}
