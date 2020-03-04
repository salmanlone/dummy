import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import Layout from "../app/components/DumbComponents/Layout";
import Head from "next/head";
import Autocomplete from "../app/components/DumbComponents/Autocomplete";
import Button from "../app/components/DumbComponents/Button";
import { withTranslation, Link, i18n } from "../i18n";
import { getSalaryResult } from "../app/containers/SalaryResult/actions";
import { loadPositionListing, loadLocations } from "../app/containers/Salary/actions";
import {
  makeSelectPosition,
  makeSelectLocation
} from "../app/containers/Salary/selector";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Salary = ({ t, salaryResult, position, positionListing, locationsResults }) => {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <Layout>
        <h1>{t("title")}</h1>
        <p>{t("subTitle")}</p>
        <br />
        <Autocomplete placeholder={t("common:placeholder.job_title")} callbackHandler={positionListing} />
        <Autocomplete placeholder={t("common:placeholder.location")} callbackHandler={locationsResults} />
        {/* <Button
          title={t("common:buttons.find_salary")}
          callbackHandler={salaryResult}
          goToLink="/SalaryResult"
        /> */}
        <Button title={t("common:buttons.find_salary")} callbackHandler={positionListing} />
        <br />
        <br />
        {/* <p>
        {salaryData !== undefined
          ? "salaryData"
          : "test"}
      </p>
      <p>{salaryData ? salaryData : "test2"}</p> */}
        <label>position text: {position}</label>

      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  position: makeSelectPosition(),
  location: makeSelectLocation()
});

const mapDispatchToProps = dispatch => {
  return {
    salaryResult: () => {
      dispatch(getSalaryResult());
    },
    positionListing: (event) => {
      dispatch(loadPositionListing(event.target.value));
    },
    locationsResults: (event) => {
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
