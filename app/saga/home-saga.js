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
      "https://localhost:5008/classification?channel=en-US&jobTitle=software&JobCount=8"
    );
    const data = yield res.json();
    yield put(loadPositionListingSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}
