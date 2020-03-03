import * as actionTypes from "./constants";

const initState = {
  salaryDetails: []
};

const salaryReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SALARY_SUCCESS:
      return {
        ...state,
        ...{ salaryDetails: action.data }
      };
    default:
      return state;
  }
};

export default salaryReducer;
