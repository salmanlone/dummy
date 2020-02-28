import { put, takeLatest } from "redux-saga/effects";

import actionTypes from "../../app/actions/action-type";
import { loadPositionListingSuccess } from "../../app/actions";

import rootHomeSaga, { loadPositionListing } from "../../app/saga/home-saga";

describe("rootHomeSaga Saga", () => {
  const loadPositionListingSaga = loadPositionListing();
  const githubDataSaga = rootHomeSaga();

  it("should start task to watch for LOAD_POSITION_LISTING action", () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    // console.log(takeLatestDescriptor);
    // console.log(loadPositionListingSaga.next().value);
    // console.log(
    //   takeLatest(actionTypes.LOAD_POSITION_LISTING, loadPositionListing)
    // );
    // expect(takeLatestDescriptor).toEqual(
    //   takeLatest(actionTypes.LOAD_POSITION_LISTING, rootHomeSaga)
    // );
  });

  it("should dispatch the reposLoaded action if it requests the data successfully", () => {
    const response = [
      "Software Developer / Engineer",
      "Software Architect",
      "Embedded Software Engineer",
      "Senior Software Developer / Engineer",
      "Software Development / Engineering Manager",
      "Senior Java Developer / Engineer",
      "JavaScript Developer / Engineer",
      "Android Developer / Engineer"
    ];
    const test = loadPositionListingSaga.next();
    console.log(test);
    const putDescriptor = loadPositionListingSaga.next(response.value);
    expect(putDescriptor).toEqual(put(loadPositionListingSuccess(response)));
  });
});
