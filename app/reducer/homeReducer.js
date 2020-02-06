import actionTypes from "../actions/action-type";

const initState = {
  position: "",
  location: ""
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SALARY_SUCCESS:
      return {
        ...state,
        ...{ salaryData: action.data }
      };
    default:
      return state;
  }
};

export default homeReducer;
