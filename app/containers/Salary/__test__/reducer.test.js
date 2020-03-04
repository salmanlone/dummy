import produce from "immer";

import salaryReducer from "../reducer";
import { loadPositionListingSuccess } from "../actions";

describe("salaryReducer", () => {
  let state;

  beforeEach(() => {
    state = {
      position: "",
      location: ""
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(salaryReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the positions listing response action correctly", () => {
    const positionsListing = [
      "Software Developer / Engineer",
      "Software Architect",
      "Embedded Software Engineer",
      "Senior Software Developer / Engineer",
      "Software Development / Engineering Manager",
      "Senior Java Developer / Engineer",
      "JavaScript Developer / Engineer",
      "Android Developer / Engineer"
    ];
    const expectedResult = produce(state, draft => {
      draft.positions = positionsListing;
    });

    expect(
      salaryReducer(state, loadPositionListingSuccess(positionsListing))
    ).toEqual(expectedResult);
  });
});
