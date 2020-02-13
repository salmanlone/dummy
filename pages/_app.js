import React from "react";
import App, { Container } from "next/app";
import { I18n as I18nR, I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import initialI18nInstance from "../i18n";
import LanguageSwitch from "../app/components/LanguageSwitch";
import createStore from "../app/store";
import { withRouter } from "next/router";
class MyApp extends App {
  render() {
    const { Component, pageProps, store, router } = this.props;
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {};



//  changing the language depending on the query param passed in the URL.
    console.log("query :: ",router.query)
    initialI18nInstance.changeLanguage(router.query['lang'])    

    return (
      <Container>
        <Provider store={store}>
          <I18nextProvider
            i18n={i18n || initialI18nInstance}
            initialI18nStore={initialI18nStore}
            initialLanguage={initialLanguage}
          >
            <React.Fragment>
              <I18nR ns="common" wait>
                {t => <h1>{t("common:integrates_react-i18next")}</h1>}
              </I18nR>
              <LanguageSwitch />
              <Component {...pageProps} />
            </React.Fragment>
          </I18nextProvider>
        </Provider>
      </Container>
    );
  }
}
export default withRouter(withRedux(createStore)(withReduxSaga({ async: true })(MyApp)));
