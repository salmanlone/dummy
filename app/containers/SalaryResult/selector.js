import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectSalaryResult = state => state.SalaryResult || initialState;

const makeSelectSalaryResultResponse = () =>
  createSelector(
    selectSalaryResult,
    SalaryResultState => SalaryResultState.salaryResultResponse
  );

export { selectSalaryResult, makeSelectSalaryResultResponse };
