import * as actionTypes from "./constants";

export const initialState = {
  positions: "",
  locations: "",
};

const salaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSITION_LISTING_SUCCESS:
      return {
        ...state,
        ...{ positions: action.data }
      };
    case actionTypes.LOAD_LOCATIONS_SUCCESS:
      return {
        ...state,
        ...{ locations: action.data }
      };
    default:
      return state;
  };
};

export default salaryReducer;
