import { loadPositionListingSuccess, loadLocationsSuccess } from "./actions";
import * as actionTypes from "./constants";
import es6promise from "../../../node_modules/es6-promise";
import "../../../node_modules/isomorphic-unfetch";
import { all, put, takeLatest } from "../../../node_modules/redux-saga/effects";
import ApiService from "../../services/api_service";

es6promise.polyfill();

export default function* rootSalarySaga() {
  yield all([
    takeLatest(actionTypes.LOAD_POSITION_LISTING, loadPositionListing),
    takeLatest(actionTypes.LOAD_LOCATIONS, loadLocations)
  ]);
}

export function* loadPositionListing() {
  let requestUrl = "https://jsonplaceholder.typicode.com/users";
  const res = yield ApiService.Get(requestUrl);
  yield put(loadPositionListingSuccess(res.data));
}

export function* loadLocations(locationInput) {
  let data = { query: locationInput.locationInput, countrId: "164" };
  let landingURL = "https://www.monster.com/";
  let requestUrl =
    landingURL + "Services/Locations.asmx/GetTrovixLocationsCompletionList";
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const res = yield ApiService.Post(requestUrl, data, headers);
  let locations = res.data.d.Result.Items;
  yield put(loadLocationsSuccess(locations));
}
