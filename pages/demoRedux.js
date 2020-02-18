import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { increment, loadData } from "../app/actions";

export class componentName extends Component {
  Increament = () => {
    this.props.Increament();
  };

  render() {
    console.log("test", this.props);

    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.load}>button text</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(componentName);
