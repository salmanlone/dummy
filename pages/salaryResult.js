import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Layout from "../app/components/DumbComponents/Layout";
import { withTranslation, Link, i18n } from "../i18n";
import { Trans } from "react-i18next";
import { createStructuredSelector } from "reselect";

import salaryDummyData from "../app/DummyData/SalaryDetailDummy";
import relatedJobsDummyData from "../app/DummyData/RelatedJobsDummy";

import BreadCrumb from "../app/components/DumbComponents/Breadcrumb";

import Card from "../app/components/SmartComponents/Card";
import SalaryGraph from "../app/components/SmartComponents/SalaryGraph";
import RelatedJobs from "../app/components/SmartComponents/relatedJobs";
import { makeSelectSalaryResultResponse } from "../app/containers/SalaryResult/selector";
import { useRouter } from "next/router";

const location = "Boston, MA";

const myStyle = {
  border: "1px solid",
  "box-sizing": "border-box"
};

const miniBox = {
  border: "1px solid",
  width: "50%"
};
const column = {
  float: "left",
  width: "33.33%",
  padding: "10px",
  height: "100%"
};

const column100 = {
  width: "812px",
  float: "left",
  padding: "10px"
};

const row = {
  content: "",
  display: "table",
  clear: "both"
};

const SalaryResult = ({ t, SalaryResultResponse }) => {
  const router = useRouter();

  console.log("router params :: ", router);
  return (
    <div>
      <Layout>
        {/* <p> {t("testing")}</p> */}
        {/* <BreadCrumb /> */}
        <SalaryGraph
          style={{ ...myStyle, ...column100 }}
          location={location}
          salary={salaryDummyData}
        />
        <div style={row}>
          <Card
            style={{ ...myStyle, ...column }}
            horizontalRule={true}
            title={"Boost Your Value"}
            blurb={"These skills can up your value"}
            cardType={"boost"}
            data={salaryDummyData.byLocation.distinguishingSkills}
          />
          <Card
            style={{ ...myStyle, ...column }}
            horizontalRule={true}
            title={"Salary for Related Jobs"}
            cardType={"salary"}
            data={salaryDummyData.similarOccupation.slice(0, 5)}
          />
          <Card
            style={{ ...myStyle, ...column }}
            horizontalRule={true}
            title={"Advanced your career"}
            blurb={"These are potential next steps in this career path"}
            cardType={"advance"}
            data={salaryDummyData.advancementOccupations
              .filter(job => job.category == "AdvancementJob")
              .slice(0, 3)}
          />
        </div>
        <div style={row}>
          <RelatedJobs
            style={{ ...myStyle, ...column100 }}
            boxStyle={miniBox}
            title={
              salaryDummyData.name + " Jobs in " + location + " on Monster"
            }
            data={relatedJobsDummyData}
          />
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  SalaryResultResponse: makeSelectSalaryResultResponse()
});

SalaryResult.getInitialProps = async () => ({
  namespacesRequired: ["salaryResult", "common"]
});

export default compose(connect(mapStateToProps))(
  withTranslation(["salaryResult", "common"])(SalaryResult)
);
