import actionTypes from "../../app/actions/action-type";

import { getSalaryResult } from "../../app/actions/salaryResult";

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
