import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Layout from "../app/components/Layout";
import Head from "next/head";
import { loadSalaryDetail } from "../app/actions";
import Autocomplete from "../app/components/Autocomplete";
import Button from "../app/components/Button";
import { withTranslation, Link, i18n } from "../i18n";

const linkStyle = {
  height: "500px",
  width: "700px"
};

const HomePage = ({ t, load, salaryData }) => (
  <div>
    <Head>
      <title>{t("title")} My page title</title>
    </Head>
    <Layout>
      <h1>What Are You Worth?</h1>
      <br />

      <Autocomplete placeholder="job title" />
      <Autocomplete placeholder="location" />
      <Button title="Find Salary" callbackHandler={load} />
      <br />
      <br />
      <p>{salaryData !== undefined ? "salaryData" : "test"}</p>
      <p>{salaryData ? salaryData : "test2"}</p>
    </Layout>
  </div>
);

const mapStateToProps = state => {
  return {
    count: state.count,
    salaryData: state.salaryData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(loadSalaryDetail());
    }
  };
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ["home"]
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  withTranslation("home")(HomePage)
);
