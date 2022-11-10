import { combineReducers } from "redux";
import authReducer from "./auth.reducers.js";
import userReducer from "./user.reducers";
import categoryReducers from "./category.reducers";
import orderReducers from "./order.reducers";
import productReducer from "./product.reducers";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducers,
  order: orderReducers,
  product: productReducer,
});
export default rootReducer;
