import React from "react";
import App, { Container } from "next/app";
import { I18n as I18nR, I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import initialI18nInstance from "../i18n";
import LanguageSwitch from "../app/components/LanguageSwitch";
import createStore from "../app/store";
class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {};

    return (
      <Container>
        <Provider store={store}>
          <I18nextProvider
            i18n={i18n || initialI18nInstance}
            initialI18nStore={initialI18nStore}
            initialLanguage={initialLanguage}
          >
            <React.Fragment>
              {/* <I18nR ns="common" wait>
                {t => <h1>{t("common:integrates_react-i18next")}</h1>}
              </I18nR> */}
              {/* <LanguageSwitch /> */}
              <Component {...pageProps} />
            </React.Fragment>
          </I18nextProvider>
        </Provider>
      </Container>
    );
  }
}
export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp));
