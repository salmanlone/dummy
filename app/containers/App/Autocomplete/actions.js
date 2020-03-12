import * as actionTypes from "./constants";

export function setStateUserInput(userInput, name) {
  return {
    type: actionTypes.SET_USER_INPUT,
    userInput,
    name
  };
}
