import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Translate from "../app/components/ComponentWithTrans";
import { withI18next } from "../app/lib/withI18next";
import Layout from "../app/components/Layout";
import Head from "next/head";
import { increment, loadData } from "../app/actions";
import Autocomplete from "../app/components/Autocomplete";
import Button from "../app/components/Button";

const linkStyle = {
  height: "500px",
  width: "700px"
};

export class Test extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
        </Head>
        <Layout>
          <h1>What Are You Worth?</h1>
          <Translate translate="subTitle" />
          <br />
          {/* <Link as={`/p/day-la-bai-post`} href={`/post?title=day-la-bai-post`}>
        <a>Bai</a>
      </Link> */}
          <Autocomplete placeholder="job title" />
          <Autocomplete placeholder="location" />
          <Button title="Find Salary" callbackHandler={this.props.load} />
          <br />
          <br />
          <p>
            {this.props.salaryData !== undefined
              ? "this.props.salaryData"
              : "test"}
          </p>
          <p>{this.props.salaryData ? this.props.salaryData : "test2"}</p>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    salaryData: state.salaryData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Increament: () => {
      dispatch(increment());
    },
    load: () => {
      console.log("load");
      dispatch(loadData());
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withI18next(["home", "common"])
)(Test);
