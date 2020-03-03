import actionTypes from "../actions/action-type";

const initState = {
  position: "",
  location: ""
};

const salaryReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.POSITION_LISTING_SUCCESS:
      return {
        ...state,
        ...{ positions: action.data }
      };
    default:
      return state;
  }
};

export default salaryReducer;
