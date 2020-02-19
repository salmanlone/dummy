import React from "react";
import { withTranslation, i18n } from "../i18n";
import { connect } from "react-redux";
import { changeLanguage } from "../app/actions";

function changeLang(event) {
  // dispatch.changeLanguage(event);
  const lang = event.target.value
  i18n.changeLanguage(lang)
}

const LanguageSwitch = ({t, lang}) => (
  <div>
    <label>{t('language_selection')} </label>
    <select onChange={changeLang}>
      <option value="en">En</option>
      <option value="fr">Fr</option>
    </select>
    <br/>
    <p>{lang}</p>
  </div>


);

const mapStateToProps = state => {
  return {
    lang: state.languageReducer.language
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: (data) => {
      dispatch(changeLanguage(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(LanguageSwitch));
