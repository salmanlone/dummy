import { failure, loadSalarySuccess } from "../actions";
import actionTypes from "../actions/action-type";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";

es6promise.polyfill();

export default function* salaryDetailWatcher() {
  yield all([takeLatest(actionTypes.LOAD_SALARY_DETAIL, loadSalaryDetail)]);
}

function* loadSalaryDetail() {
  try {
    const res = yield fetch(
      "http://localhost:5009/details?channel=en-US&Occupation=Software%20Developer%20/%20Engineer&Location=Boston,%20MA"
    );
    const data = yield res.json();
    yield put(loadSalarySuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}
