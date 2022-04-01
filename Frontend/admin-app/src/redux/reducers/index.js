import { combineReducers } from "redux";
import authReducer from "./auth.reducers.js";
import userReducer from "./user.reducers";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
export default rootReducer;
