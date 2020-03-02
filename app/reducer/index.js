import { combineReducers } from "redux";
import salaryReducer from "./salaryReducer";
import salaryResultReducer from "./salaryResultReducer";
import languageReducer from "./languageReducer";

const allReducers = combineReducers({
  salaryReducer,
  salaryResultReducer,
  languageReducer
});

export default allReducers;
