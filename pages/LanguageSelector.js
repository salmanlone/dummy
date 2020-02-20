import React, { useState, useEffect } from "react";
import { withTranslation, i18n } from "../i18n";
import { connect } from 'react-redux';
import { changeLanguage } from "../app/actions";

const LanguageSelector = ({ t, lang, changeLanguage }) => {

  const [language, setLanguage] = useState(lang);

  console.log('18 :: ',i18n)

  useEffect(() => {
    setLanguage(language => lang)
    i18n.changeLanguage(lang);
  }, [lang])

  return (
    <div>
      <label>{t('language_selection')} </label>
      <select onChange={changeLanguage} value={lang}>
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </select>
      <br />
    </div>
  )
};


//         <input type="text" onChange={(event)=> searchQuery(event.target.value)} placeholder="Search for items or sellers" />

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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(LanguageSelector));
