import * as actionTypes from "./constants";

export const initialState = {
  position: "",
  location: ""
};

const salaryReducer = (state = initialState, action) => {
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
