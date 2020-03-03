import * as actionTypes from "./constants";

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function loadPositionListing() {
  return {
    type: actionTypes.LOAD_POSITION_LISTING
  };
}

export function loadPositionListingSuccess(data) {
  return {
    type: actionTypes.POSITION_LISTING_SUCCESS,
    data
  };
}
