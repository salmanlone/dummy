import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { compose } from "redux";
import ComponentWithTrans from "../app/components/ComponentWithTrans";
import { withI18next } from "../app/lib/withI18next";
import Layout from "../app/components/Layout";
import SearchCard from "../app/components/SearchCard";
import Head from "next/head";

export const Test = ({ t }) => (
  <div>
    <Head>
      <title>My page title</title>
    </Head>
    <Layout>
      <h1>What Are You Worth?</h1>
      <h2>{t("subTitle")}</h2>
      {/* <p>{t("common:integrates_react-i18next")}</p>
    <p>{t("sample_test")}</p> */}
      {/* <div>
      <button>{t("sample_button")}</button>
    </div> */}
      {/* <ComponentWithTrans /> */}
      <br />
      {/* <Link as={`demoRedux-1234`} href="/demoRedux?title=1234">
        <a>{t("link.gotoPage3")}</a>
      </Link> */}
      <br />
      {/* <Link as={`/p/day-la-bai-post`} href={`/post?title=day-la-bai-post`}>
        <a>Bai</a>
      </Link> */}
      <SearchCard />
    </Layout>
  </div>
);

export default compose(connect(), withI18next(["home", "common"]))(Test);
