import { combineReducers } from "redux";
import Auth from "./auth.reducers.js";

const rootReducer = combineReducers({
  auth: Auth,
});
export default rootReducer;
