import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// midleware (thunk) is used for async actions
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
