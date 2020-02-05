import React from "react";
import Link from "next/link";
import Layout from "../app/components/Layout";
import Breadcrumb from "../app/components/Breadcrumb";

import ComponentWithTrans from "../app/components/ComponentWithTrans";
import { withI18next } from "../app/lib/withI18next";

const Salary = ({ t }) => (
  <div>
    <Layout>
      <h1>{t("welcome to Salary")}</h1>
      <p>{t("common:integrates_react-i18next")}</p>
      <Breadcrumb />

      {/* <ComponentWithTrans /> */}
      {/* <Link href="/">
        <a>{t("link.gotoPage1")}</a>
      </Link> */}
    </Layout>
  </div>
);

export default withI18next(["Salary", "common"])(Salary);
