import React from "react";
import Layout from "../app/components/Layout";
import Breadcrumb from "../app/components/Breadcrumb";
import { withTranslation, Link, i18n } from "../i18n";

const Salary = ({ t }) => (
  <div>
    <Layout>
      {/* <h1>{t("welcome to Salary")}</h1>
      <p>{t("common:integrates_react-i18next")}</p> */}
      <button onClick={() => i18n.changeLanguage("en")}>Change to en</button>
      <button onClick={() => i18n.changeLanguage("de")}>Change to de</button>
      <Breadcrumb />

      <p> {t("te")}</p>
      <p> {t("testing123")}</p>
      <p> {t("transComponent")}</p>
      <p> {t("extendedComponent")}</p>
      <p> {t("pureComponent")}</p>
      <p> {t("integrates_react-i18next")}</p>
    </Layout>
  </div>
);

Salary.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(Salary);
