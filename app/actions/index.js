import { INCREMENT, DECREMENT, RESET, FAILURE } from "./action-type";

export function failure(error) {
  return {
    type: FAILURE,
    error
  };
}

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function reset() {
  return { type: RESET };
}
