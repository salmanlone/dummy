import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Layout from "../app/components/Layout";
import Head from "next/head";
import Autocomplete from "../app/components/Autocomplete";
import Button from "../app/components/Button";
import { withTranslation, Link, i18n } from "../i18n";

import { getSalaryDetail } from "../app/actions/salaryDetail";
import { loadPositionListing } from "../app/actions/home";

const HomePage = ({ t, salaryDetail }) => {
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
          callbackHandler={salaryDetail}
          goToLink="/salary"
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
    salaryDetail: () => {
      dispatch(getSalaryDetail());
    },
    positionListing: () => {
      dispatch(loadPositionListing());
    }
  };
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ["home", "common"]
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  withTranslation(["home", "common"])(HomePage)
);
