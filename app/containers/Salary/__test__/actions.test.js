import * as actionTypes from "../constants";

import { loadPositionListing } from "../actions";

describe("Salary Actions", () => {
  describe("loadPositionListing", () => {
    it("should return the correct type", () => {
      const expectedResult = {
        type: actionTypes.LOAD_POSITION_LISTING
      };

      expect(loadPositionListing()).toEqual(expectedResult);
    });
  });
});
