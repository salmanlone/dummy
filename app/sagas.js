import salaryResultSaga from "./containers/SalaryResult/saga";
import salarySaga from "./containers/Salary/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([salaryResultSaga(), salarySaga()]);
}
