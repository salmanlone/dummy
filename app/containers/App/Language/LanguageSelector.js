import React, { useState, useEffect } from "react";
import { withTranslation, i18n, Router } from "../../../../i18n";
import { connect } from "react-redux";
import { changeLanguage } from "./actions";

const LangSelectorStyle = {
  padding: "10px",
  backgroundColor: "#dddddd",
  display: "inline"
};

function changeLang(event) {
  changeRoute(event.target.value);
}

const changeRoute = (lang) => {
  i18n.changeLanguage(lang).then(() => {
    if (lang === 'fr') {
      Router.push("/salary", "/salarie");
    } else
      Router.push("/salary", "/salary");
  });
};

const LanguageSelector = ({ t, updateLanguageState }) => {
  const currentlang = i18n.language;

  return (
    <div style={LangSelectorStyle}>
      <label>
        <b>{t("language_selection")}</b>{" "}
      </label>
      <select
        onChange={e => {
          changeLang(e),
            updateLanguageState(e)
        }}
        value={currentlang}
      >
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="de">de</option>
        <option value="may">may</option>
      </select>
      <br />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lang: state.languageReducer.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLanguageState: data => {
      dispatch(changeLanguage(data.target.value));
    }
  };
};

LanguageSelector.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("common")(LanguageSelector));
