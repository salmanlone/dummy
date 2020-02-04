import React from "react";
import Link from "next/link";

import ComponentWithTrans from "../app/components/ComponentWithTrans";
import { withI18next } from "../app/lib/withI18next";

const Salary = ({ t }) => (
  <div>
    <h1>{t("welcome to Salary")}</h1>
    <p>{t("common:integrates_react-i18next")}</p>
    <ComponentWithTrans />
    <Link href="/">
      <a>{t("link.gotoPage1")}</a>
    </Link>
  </div>
);

export default withI18next(["Salary", "common"])(Salary);
