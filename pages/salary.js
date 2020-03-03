import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Layout from "../app/components/DumbComponents/Layout";
import Head from "next/head";
import Autocomplete from "../app/components/DumbComponents/Autocomplete";
import Button from "../app/components/DumbComponents/Button";
import { withTranslation, Link, i18n } from "../i18n";

import { getSalaryResult } from "../app/containers/SalaryResult/actions";
import { loadPositionListing } from "../app/containers/Salary/actions";

const Salary = ({ t, salaryResult }) => {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <Layout>
        <h1>{t("title")}</h1>
        <p>{t("subTitle")}</p>
        <br />
        <Autocomplete placeholder={t("common:placeholder.job_title")} />
        <Autocomplete placeholder={t("common:placeholder.location")} />
        <Button
          title={t("common:buttons.find_salary")}
          callbackHandler={salaryResult}
          goToLink="/SalaryResult"
        />
        {/* <Button title={t("common:buttons.find_salary")} callbackHandler={positionListing} goTo="/salary"     /> */}
        <br />
        <br />
        {/* <p>
        {salaryData !== undefined
          ? "salaryData"
          : "test"}
      </p>
      <p>{salaryData ? salaryData : "test2"}</p> */}
      </Layout>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count,
    salaryData: state.salaryData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    salaryResult: () => {
      dispatch(getSalaryResult());
    },
    positionListing: () => {
      dispatch(loadPositionListing());
    }
  };
};

Salary.getInitialProps = async () => ({
  namespacesRequired: ["salary", "common"]
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  withTranslation(["salary", "common"])(Salary)
);
