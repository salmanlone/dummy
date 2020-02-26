import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../app/store";
import { appWithTranslation, i18n } from "../i18n";
import { compose } from "redux";

class MyApp extends App {

  //  // changes for IIS
  // static async getInitialProps(props) {
  //   const { ctx } = props;
  //   const { req, res } = ctx;
  //   let appProps;

  //   let theLanguage = ""
  // let domainList = [
  //   ["www.monster.com", "en"],
  //   ["www.monster.de", "de"],
  //   ["www.monster.fr", "fr"],
  //   ["www.monster.ca", "en"]
  // ]

  // if (req) {
  //   const foobar = req.headers["foobar-url"]
  //   console.log("myheaders", req.headers)

  //   for (let i = 0; i < domainList.length; i++) {
  //     if (foobar.includes(domainList[i][0])) {
  //       theLanguage = domainList[i][1]
  //       // console.log("AAAAAAA", domainList[i][1])
  //     }
  //   }
  //   // console.log("aFOOBAR", foobar)

  //   // console.log("aFOOBAR", req.headers["foobar-url"])
  //   // http://www.monster.de:80/de
  //   // 19|de|
  //   // get from foo bar to set language, pass to props
  // }
  //   appProps = await App.getInitialProps(props);

  //   // set props here, access from apge
  //   i18n.changeLanguage(theLanguage)

  //   appProps.pageProps = {
  //     ...appProps.pageProps,
  //     theLanguage
  //   };
  //   return { ...appProps };
  // }

  // using the browser URL, then we change the language according to global.window.location
  // componentDidMount() {
  //     console.log('URL Origin :: ', global.window.origin);
  //   console.log('URL location href :: ', global.window.location.href);
  //   console.log('URL location host :: ', global.window.location.host);

  //   const domain = global.window.location.host;
  //   if (domain === "localhost:3000") {
  //     i18n.changeLanguage("fr");
  //   } else if (domain === "localhost:3001") {
  //     i18n.changeLanguage("en");
  //   } else i18n.changeLanguage("en");
  // }

  // testing on get initial props
  static async getInitialProps(Component, ctx) {
    let namespacesRequired = ["common"];
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = (await Component.getInitialProps(ctx))
        || {}
    }
    return { pageProps, namespacesRequired }
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
