import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import Layout from "../../app/components/DumbComponents/Layout";
import Head from "next/head";
import Autocomplete from "../../app/containers/App/Autocomplete";
import Button from "../../app/components/DumbComponents/Button";
import { withTranslation, Link, i18n } from "../../i18n";
import { getSalaryResult } from "../../app/containers/SalaryResult/actions";
import {
  loadPositionListing,
  loadLocations
} from "../../app/containers/Salary/actions";
import {
  makeSelectPositions,
  makeSelectLocations
} from "../../app/containers/Salary/selector";

const Salary = ({
  t,
  salaryResult,
  positions,
  locations,
  positionListing,
  locationsResults,
  selectedLocation,
  selectedPosition
}) => {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <Layout>
        <h1>{t("title")}</h1>
        <p>{t("subTitle")}</p>
        <br />

        <p>{selectedPosition}</p>
        <p>{selectedLocation}</p>
        <Autocomplete
          placeholder={t("common:placeholder.job_title")}
          callbackHandler={positionListing}
          controlName="position"
        />
        <br />
        <Autocomplete
          placeholder={t("common:placeholder.location")}
          callbackHandler={locationsResults}
          DataFromState={locations}
          controlName="location"
        />
        {/* <Button
          title={t("common:buttons.find_salary")}
          callbackHandler={salaryResult}
          goToLink="/SalaryResult"
        /> */}
        <br />
        <Button
          title={t("common:buttons.find_salary")}
          callbackHandler={salaryResult}
        />
        <br />
        <br />
        <br />
        <Button
          goToLink={
            "/salary/" +
            selectedPosition.replace(" ", "-") +
            "-" +
            selectedLocation.replace(" ", "-")
          }
          title={"Go to Salary Result"}
        />
        <br />
        <br />
        {/* <p>
        {salaryData !== undefined
          ? "salaryData"
          : "test"}
      </p>
      <p>{salaryData ? salaryData : "test2"}</p> */}
        {/* <label>locations text: {locations[0]}</label> */}
      </Layout>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   positions: makeSelectPositions(),
//   // locations: makeSelectLocations()
// });

const mapStateToProps = state => {
  return {
    locations: state.salaryReducer.locations,
    positions: state.salaryReducer.positions,
    selectedLocation: state.AutocompleteReducer.selectedLocation,
    selectedPosition: state.AutocompleteReducer.selectedPosition
  };
};

const mapDispatchToProps = dispatch => {
  return {
    salaryResult: () => {
      dispatch(getSalaryResult());
    },
    positionListing: event => {
      dispatch(loadPositionListing(event.target.value));
    },
    locationsResults: event => {
      dispatch(loadLocations(event.target.value));
    }
  };
};

Salary.getInitialProps = async () => ({
  namespacesRequired: ["salary", "common"]
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  withTranslation(["salary", "common"])(Salary)
);
