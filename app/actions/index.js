import actionTypes from "./action-type";

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function loadSalarySuccess(data) {
  return {
    type: actionTypes.LOAD_SALARY_SUCCESS,
    data
  };
}

export function loadSalaryDetail() {
  return {
    type: actionTypes.LOAD_SALARY_DETAIL
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

export function changeLanguage(data) {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    data
  };
}

