import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { compose } from "redux";
import PureComponent from "../app/components/PureComponent";
import ExtendedComponent from "../app/components/ExtendedComponent";
import ComponentWithTrans from "../app/components/ComponentWithTrans";
import { withI18next } from "../lib/withI18next";

const Test = ({ t }) => (
  <div>
    <h1>{t("welcome")}</h1>
    <p>{t("common:integrates_react-i18next")}</p>
    <p>{t("sample_test")}</p>
    <div>
      <button>{t("sample_button")}</button>
    </div>
    <PureComponent t={t} />
    <ExtendedComponent />
    <ComponentWithTrans />
    <Link href="/page2">
      <a>{t("link.gotoPage2")}</a>
    </Link>
    <br />
    <Link href="/page3">
      <a>{t("link.gotoPage3")}</a>
    </Link>
    <Link as={`demoRedux-1234`} href="/demoRedux?title=1234">
      <a>{t("link.gotoPage3")}</a>
    </Link>
    <Link as={`/p/day-la-bai-post`} href={`/post?title=day-la-bai-post`}>
      <a>Bai</a>
    </Link>
  </div>
);

export default compose(connect(), withI18next(["home", "common"]))(Test);
