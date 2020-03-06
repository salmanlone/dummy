import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Layout from "../app/components/DumbComponents/Layout";
import { withTranslation, Link, i18n } from "../i18n";
import { Trans } from "react-i18next";
import { createStructuredSelector } from "reselect";

import salaryDummyData from "../app/SalaryDetailDummy";

import BreadCrumb from "../app/components/DumbComponents/Breadcrumb";

import Card from "../app/components/SmartComponents/Card";
import SalaryGraph from "../app/components/SmartComponents/SalaryGraph";
import { makeSelectSalaryResultResponse } from "../app/containers/SalaryResult/selector";

const myStyle = {
  border: "1px solid"
};

const SalaryResult = ({ t, SalaryResultResponse }) => (
  <div>
    <Layout>
      {/* <p>
        {SalaryResultResponse.length > 0
          ? SalaryResultResponse
          : "nothing to show."}
      </p> */}
      <p> {t("testing")}</p>
      <BreadCrumb />
      <SalaryGraph style={myStyle} salary={salaryDummyData} />
      <div>
        <Card
          style={myStyle}
          title={"Boost Your Value"}
          blurb={"These skills can up your value"}
          accessNameProp={true}
          data={salaryDummyData.byLocation.distinguishingSkills}
        />
        <Card
          style={myStyle}
          title={"Salary for Related Jobs"}
          accessNameProp={false}
          data={salaryDummyData.similarOccupation.slice(0, 5)}
        />
        <Card
          style={myStyle}
          title={"Advanced your career"}
          blurb={"These are potential next steps in this career path"}
          accessNameProp={true}
          data={salaryDummyData.advancementOccupations
            .filter(job => job.category == "AdvancementJob")
            .slice(0, 3)}
        />
      </div>
    </Layout>
  </div>
);

const mapStateToProps = createStructuredSelector({
  SalaryResultResponse: makeSelectSalaryResultResponse()
});

SalaryResult.getInitialProps = async () => ({
  namespacesRequired: ["salaryResult", "common"]
});

export default compose(connect(mapStateToProps))(
  withTranslation(["salaryResult", "common"])(SalaryResult)
);
