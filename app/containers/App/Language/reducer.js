import * as actionTypes from "./constants";

const initState = {
  language: "en"
};

const languageReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        ...{ language: action.data }
      };
    default:
      return state;
  }
};

export default languageReducer;
