import { failure, loadPositionListingSuccess } from "../actions";
import actionTypes from "../actions/action-type";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { all, call, delay, put, takeLatest } from "redux-saga/effects";

es6promise.polyfill();

export default function* rootHomeSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_POSITION_LISTING, loadPositionListing)
  ]);
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
