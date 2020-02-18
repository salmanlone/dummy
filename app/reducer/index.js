import { combineReducers } from "redux";
import index_temp from "./index_temp";
import homeReducer from "./homeReducer";
import salaryReducer from "./salaryReducer";

const allReducers = combineReducers({
  index_temp,
  homeReducer,
  salaryReducer
});

export default allReducers;
