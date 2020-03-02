import actionTypes from "../action-type";

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function loadSalaryResultSuccess(data) {
  return {
    type: actionTypes.LOAD_SALARY_SUCCESS,
    data
  };
}

export function getSalaryResult() {
  return {
    type: actionTypes.LOAD_SALARY_DETAIL
  };
}
