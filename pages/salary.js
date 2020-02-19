import React from "react";
import Layout from "../app/components/Layout";
import { withTranslation, Link, i18n } from "../i18n";
import { Trans } from 'react-i18next';





const Salary = ({ t }) => (
  <div>
    <Layout>
      <p> {t("testing")}</p>
      <Trans i18nKey="welcome"><b> ismaiel </b> Welcome</Trans>


    </Layout>
  </div>
);

Salary.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default withTranslation("common")(Salary);
