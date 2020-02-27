import homeReducer from "../../app/reducer/homeReducer";

describe("homeReducer", () => {
  let state;

  beforeEach(() => {
    state = {
      position: "",
      location: ""
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });
});
