import actionTypes from "../action-type";

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function changeLanguage(data) {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    data
  };
}
