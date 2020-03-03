import produce from "immer";

import salaryResultReducer from "../../app/reducer/salaryResultReducer";
import { loadPositionListingSuccess } from "../../app/actions/salaryResult";

describe("salaryResultReducer", () => {
  let state;

  beforeEach(() => {
    state = {
      salaryDetails: []
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(salaryResultReducer(undefined, {})).toEqual(expectedResult);
  });

  // it("should handle the positions listing response action correctly", () => {
  //   const positionsListing = [
  //     "Software Developer / Engineer",
  //     "Software Architect",
  //     "Embedded Software Engineer",
  //     "Senior Software Developer / Engineer",
  //     "Software Development / Engineering Manager",
  //     "Senior Java Developer / Engineer",
  //     "JavaScript Developer / Engineer",
  //     "Android Developer / Engineer"
  //   ];
  //   const expectedResult = produce(state, draft => {
  //     draft.positions = positionsListing;
  //   });

  //   expect(
  //     salaryResultReducer(state, loadPositionListingSuccess(positionsListing))
  //   ).toEqual(expectedResult);
  // });
});
