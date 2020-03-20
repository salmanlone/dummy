import React, { useState, useEffect } from "react";
import { withTranslation, i18n } from "../../../../i18n";
import { connect } from "react-redux";
import { changeLanguage } from "./actions";
// import { useRouter } from "next/router";
import { Router } from "../../../../routes";

const LangSelectorStyle = {
  padding: "10px",
  backgroundColor: "#dddddd",
  display: "inline"
};

function changeLang(event) {
  i18n.changeLanguage(event.target.value);
  // if (event.target.value === "en") {
  //   console.log("en::", Router);
  //   Router.pushRoute("salary");
  // }
  // if (event.target.value === "fr") {
  //   console.log("fr::", Router);
  //   Router.pushRoute("salaire");
  // }
}

const LanguageSelector = ({ t, lang, changeLanguage, pathname }) => {
  // const [language, setLanguage] = useState(lang);
  const currentlang = i18n.language;
  // useEffect(() => {
  //   setLanguage(currentlang);
  // }, [language]);

  return (
    <div style={LangSelectorStyle}>
      <label>
        <b>{t("language_selection")}</b>{" "}
      </label>
      <select
        onChange={e => {
          changeLang(e), changeLanguage(e);
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
