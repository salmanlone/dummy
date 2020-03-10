import React from "react";

import Layout from "../app/components/DumbComponents/Layout";
import Button from "../app/components/DumbComponents/Button";
import { withTranslation, Link, i18n } from "../i18n";

const Home = ({ t }) => {
  return (
    <Layout>
      <h1>{t("home:title")}</h1>
      <Button title={t("home:link.goToSalary")} goToLink="/Salary" />
    </Layout>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["home", "common"]
});

export default withTranslation(["home", "common"])(Home);
