import * as actionTypes from "./constants";


export function loadPositionListing(positionInput) {
  return {
    type: actionTypes.LOAD_POSITION_LISTING,
    positionInput
  };
}

export function loadPositionListingSuccess(data) {
  return {
    type: actionTypes.POSITION_LISTING_SUCCESS,
    data
  };
}

export function loadLocations(locationInput) {
  return {
    type: actionTypes.LOAD_LOCATIONS,
    locationInput
  };
}

export function loadLocationsSuccess(data) {
  return {
    type: actionTypes.LOAD_LOCATIONS_SUCCESS,
    data
  };
}