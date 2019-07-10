// ---------------------------------------------- modules import
import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import productReducer from "./product/reducer";

// ---------------------------------------------- the root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
