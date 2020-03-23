import * as actionTypes from "./constants";

export const initialState = {
  selectedLocation: "",
  selectedPosition: ""
};

const AutocompleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INPUT:
      switch (action.name) {
        case "location":
          return {
            ...state,
            ...{ selectedLocation: action.userInput }
          };
        case "position":
          return {
            ...state,
            ...{ selectedPosition: action.userInput }
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default AutocompleteReducer;
