import * as actionTypes from "../constants";

import { getSalaryResult } from "../actions";

describe("Salary Result Actions", () => {
  describe("getSalaryResult", () => {
    it("should return the correct type", () => {
      const expectedResult = {
        type: actionTypes.LOAD_SALARY_DETAIL
      };

      expect(getSalaryResult()).toEqual(expectedResult);
    });
  });
});
