import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectSalary = state => state.salary || initialState;

const makeSelectPositions = () =>
  createSelector(selectSalary, salaryState => salaryState.positions);

const makeSelectLocations = () =>
  createSelector(selectSalary, salaryState => salaryState.locations);

export { selectSalary, makeSelectPositions, makeSelectLocations };
