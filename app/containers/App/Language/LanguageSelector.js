import React, { useState, useEffect } from "react";
import { withTranslation, i18n } from "../../../../i18n";
import { connect } from "react-redux";
import { changeLanguage } from "./actions";

const LangSelectorStyle = {
  padding: "10px",
  backgroundColor: "#dddddd",
  display: "inline"
};

function changeLang(event) {
  i18n.changeLanguage(event.target.value);
}

const LanguageSelector = ({ t, lang, changeLanguage, pathname }) => {
  const [language, setLanguage] = useState(lang);
  const currentlang = i18n.language;
  useEffect(() => {
    setLanguage(currentlang);
  }, [lang]);

  return (
    <div style={LangSelectorStyle}>
      <label>
        <b>{t("language_selection")}</b>{" "}
      </label>
      <select
        onChange={e => {
          changeLanguage(e), changeLang(e);
        }}
        value={currentlang}
      >
        <option value="en">En</option>
        <option value="fr">Fr</option>
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
    changeLanguage: data => {
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
