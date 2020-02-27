import salaryDetailWatcher from "./salary-saga";
import rootHomeSaga from "./home-saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([salaryDetailWatcher(), rootHomeSaga()]);
}
