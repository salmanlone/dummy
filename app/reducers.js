import { combineReducers } from "redux";
import salaryReducer from "./containers/Salary/reducer";
import salaryResultReducer from "./containers/SalaryResult/reducer";
import languageReducer from "./containers/App/Language/reducer";

const allReducers = combineReducers({
  salaryReducer,
  salaryResultReducer,
  languageReducer
});

export default allReducers;
