import { combineReducers } from "redux";
import salaryReducer from "./containers/Salary/reducer";
import salaryResultReducer from "./containers/SalaryResult/reducer";
import languageReducer from "./containers/App/Language/reducer";
import AutocompleteReducer from "./containers/App/Autocomplete/reducer";

const allReducers = combineReducers({
  salaryReducer,
  salaryResultReducer,
  languageReducer,
  AutocompleteReducer
});

export default allReducers;
