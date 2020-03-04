import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectSalary = state => state.salary || initialState;

const makeSelectPosition = () =>
  createSelector(selectSalary, salaryState => salaryState.position);

const makeSelectLocation = () =>
  createSelector(selectSalary, salaryState => salaryState.location);

export { selectSalary, makeSelectPosition, makeSelectLocation };
