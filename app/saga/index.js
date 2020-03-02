import salaryResultSaga from "./salaryResultSaga";
import salarySaga from "./salarySaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([salaryResultSaga(), salarySaga()]);
}
