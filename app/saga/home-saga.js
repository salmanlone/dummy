import { failure, loadSalarySuccess } from "../actions";
import actionTypes from "../actions/action-type";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { takeLatest } from "redux-saga";
import { put } from "redux-saga/effects";

es6promise.polyfill();

export default function* homeWatcher() {
  yield [takeLatest(actionTypes.LOAD_POSITION_LISTING, loadPositionListing)];
}

function* loadPositionListing() {
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
