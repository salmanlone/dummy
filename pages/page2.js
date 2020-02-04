import React from "react";
import Link from "next/link";

import PureComponent from "../app/components/PureComponent";
import ExtendedComponent from "../app/components/ExtendedComponent";
import ComponentWithTrans from "../app/components/ComponentWithTrans";
import { withI18next } from "../app/lib/withI18next";

const Page2 = ({ t }) => (
  <div>
    <h1>{t("welcomePage2")}</h1>
    <p>{t("common:integrates_react-i18next")}</p>
    <PureComponent t={t} />
    <ExtendedComponent />
    <ComponentWithTrans />
    <Link href="/">
      <a>{t("link.gotoPage1")}</a>
    </Link>
  </div>
);

export default withI18next(["page2", "common"])(Page2);
