import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import salaryReducer from "./salaryReducer";

const allReducers = combineReducers({
  homeReducer,
  salaryReducer
});

export default allReducers;
