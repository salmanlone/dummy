import { failure, loadSalaryResultSuccess } from "./actions";
import * as actionTypes from "./constants";
import es6promise from "../../../node_modules/es6-promise";
import "../../../node_modules/isomorphic-unfetch";
import {
  all,
  call,
  delay,
  put,
  takeLatest
} from "../../../node_modules/redux-saga/effects";

es6promise.polyfill();

export default function* salaryDetailWatcher() {
  yield all([takeLatest(actionTypes.LOAD_SALARY_DETAIL, getSalaryDetail)]);
}

function* getSalaryDetail() {
  try {
    const res = yield fetch(
      "http://localhost:5009/details?channel=en-US&Occupation=Software%20Developer%20/%20Engineer&Location=Boston,%20MA"
    );
    const data = yield res.json();
    yield put(loadSalaryResultSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}
