import * as actionTypes from "./constants";

export const initialState = {
  SalaryResultResponse: []
};

const salaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SALARY_SUCCESS:
      return {
        ...state,
        ...{ SalaryResultResponse: action.data }
      };
    default:
      return state;
  }
};

export default salaryReducer;
