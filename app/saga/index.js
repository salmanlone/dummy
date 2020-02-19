import salaryDetailWatcher from "./salary-saga";
import homeWatcher from "./home-saga";

export default function* rootSaga() {
  yield [salaryDetailWatcher(), homeWatcher()];
}
