import actionTypes from "../../app/actions/action-type";

import { loadPositionListing } from "../../app/actions/salary";

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
