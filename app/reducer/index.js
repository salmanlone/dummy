import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import salaryReducer from "./salaryReducer";

const allReducers = combineReducers({
  index_temp,
  homeReducer,
  salaryReducer
});

export default allReducers;
