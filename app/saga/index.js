import { delay } from "redux-saga";
import { all, call, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import {
  failure,
  loadDataSuccess,
  tickClock,
  loadSalarySuccess
} from "../actions";
import actionTypes from "../actions/action-type";

es6promise.polyfill();

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadSalaryData() {
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

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadSalaryData)
  ]);
}

export default rootSaga;
