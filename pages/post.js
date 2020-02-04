import React, { Component } from "react";
import Layout from "../app/components/MyLayout";
import { withRouter } from "next/router";
class Post extends Component {
  constructor(props) {
    super(props);
    console.log("run");
  }
  changeURL = () => {
    this.props.router.replace("/p/this-is-a-post", "/p/this-is-a-post", {
      shallow: false
    });
  };
  render() {
    console.log("this.props", this.props);
    return (
      <Layout>
        <p>This is the blog post content test asasas.</p>
        <button onClick={this.changeURL}>Change URL</button>
      </Layout>
    );
  }
}
export default withRouter(Post);
