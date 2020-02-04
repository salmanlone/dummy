import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { compose } from "redux";

import Layout from "../app/components/Layout";

function HomePage() {
  return <Layout>Welcome to Next.js!</Layout>;
}

export default HomePage;
