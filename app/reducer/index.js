import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import salaryReducer from "./salaryReducer";
import languageReducer from "./languageReducer";

const allReducers = combineReducers({
  homeReducer,
  salaryReducer,
  languageReducer
});

export default allReducers;
