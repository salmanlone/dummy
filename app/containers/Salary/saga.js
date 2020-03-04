import { failure, loadPositionListingSuccess } from "./actions";
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

export default function* rootSalarySaga() {
  yield all([
    takeLatest(actionTypes.LOAD_POSITION_LISTING, loadPositionListing)
  ]);
}

export function* loadPositionListing() {
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
