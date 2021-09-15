import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({})

const initialState = {}
const alert = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware([...middleware]))
);

export default store