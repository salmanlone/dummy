import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { increment, loadData } from "../app/actions";
import { withI18next } from "../app/lib/withI18next";

export class componentName extends Component {
  Increament = () => {
    this.props.Increament();
  };

  render() {
    console.log("test", this.props);
    const { t } = this.props;
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.load}>{t("bnt_text")}</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
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
  withI18next(["home"])
)(componentName);
