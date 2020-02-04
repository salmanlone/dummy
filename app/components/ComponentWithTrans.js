import React from "react";
import { Trans } from "react-i18next";

export default function ComponentWithTrans() {
  return (
    <p>
      <Trans i18nKey="common:transComponent">Translate</Trans>
      <Trans i18nKey="common:testing">Hi</Trans>
    </p>
  );
}
