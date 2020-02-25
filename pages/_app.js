import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../app/store";
import { appWithTranslation, i18n } from "../i18n";
import { compose } from "redux";

class MyApp extends App {
  static async getInitialProps(props) {
    const { ctx } = props;
    const { req, res } = ctx;

    let theLanguage = "";
    let domainList = [
      ["www.monster.com", "en"],
      ["www.monster.de", "de"],
      ["www.monster.fr", "fr"],
      ["www.monster.ca", "en"]
    ];

    const appProps = await App.getInitialProps(props);

    // set props here, access from apge
    i18n.changeLanguage(theLanguage);
    appProps.pageProps = {
      ...appProps.pageProps,
      theLanguage
    };

    return { ...appProps };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <Provider store={store}>
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(appWithTranslation(MyApp)));
