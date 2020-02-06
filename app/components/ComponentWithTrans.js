import React from "react";
import { Trans } from "react-i18next";

export default function ComponentWithTrans(props) {
  return (
    <p>
      <Trans i18nKey={props.translate} />
    </p>
  );
}
